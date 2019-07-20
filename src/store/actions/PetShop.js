import history from "../../history";
import firebase from "../../config/firebaseConfig";
const db = firebase.firestore();

export const returnItems = inventory => {
  return {
    type: "RETURN_INVENTORY",
    inventory: inventory
  };
};

export const returnItem = item => {
  return {
    type: "RETURN_ITEM",
    item: item
  };
};

export const returnUsersItems = items => {
  return {
    type: "RETURN_USERS_ITEMS",
    items: items
  };
};

export const fetchStart = () => {
  return {
    type: "FETCH_START"
  };
};

export const fetchItemStart = () => {
  return {
    type: "FETCH_ITEM_START"
  };
};

export const noItemsFound = () => {
  return {
    type: "NO_ITEMS_FOUND"
  };
};

export const fetchItem = id => {
  return dispatch => {
    dispatch(fetchItemStart());
    console.log(id);
    let itemRef = db.collection("store-inventory").where("itemId", "==", id);
    itemRef
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          dispatch(returnItem(doc.data()));
        });
        console.log("dispatched");
      })
      .catch(err => console.log(err));
  };
};

export const fetchInventory = () => {
  return async dispatch => {
    await db
      .collection("store-inventory")
      .where("ownerId", "==", "DNE")
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        let itemsArray = [];
        querySnapshot.forEach(doc => {
          itemsArray.push({ ...doc.data(), itemId: doc.id });
          console.log(`doc id: ${doc.id}`);
        });
        dispatch(returnItems(itemsArray));
      })
      .catch(err => console.log(err));
  };
};

export const purchaseItem = id => {
  return async dispatch => {
    // assign the item to the current user
    //delete it from the database
    dispatch(fetchStart());
    let currentUserId = await firebase.auth().currentUser.uid;
    db.collection("store-inventory")
      .where("id", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let priceOfItem = doc.data().price;
          let itemRef = db.collection("store-inventory").doc(doc.id);
          itemRef
            .update({
              ownerId: currentUserId
            })
            .then(() => {
              history.push("/inventory");
              let userRef = db.collection("users").doc(currentUserId);
              userRef.get().then(doc => {
                let newTokens = doc.data().tokens - priceOfItem;
                userRef.set(
                  {
                    tokens: newTokens
                  },
                  { merge: true }
                );
              });
            })
            .catch(err => console.log(console.error()));
        });
      })
      .catch(err => console.log(err));
  };
};

export const fetchUsersItems = () => {
  // create an auth middleware???
  return async dispatch => {
    let currentUser = await firebase.auth().currentUser;
    if (currentUser) {
      let currentUserId = await firebase.auth().currentUser.uid;
      db.collection("store-inventory")
        .where("ownerId", "==", `${currentUserId}`)
        .get()
        .then(querySnapshot => {
          let usersItems = [];
          querySnapshot.forEach(doc => {
            usersItems.push(doc.data());
          });
          if (usersItems.length > 0) {
            dispatch(returnUsersItems(usersItems));
          } else {
            dispatch(noItemsFound());
          }
        })
        .catch(err => console.log(err));
    } else {
      history.push("/access-denied");
    }
  };
};
