import history from "../../history";
import firebase from "../../config/firebaseConfig";
const db = firebase.firestore();

export const returnItems = inventory => {
  return {
    type: "RETURN_INVENTORY",
    inventory: inventory
  };
};

export const returnSpecificItems = items => {
  return {
    type: "RETURN_SPECIFIC_ITEMS",
    specificItems: items
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

export const useItemOnPet = (itemId, petId, type) => {
  return dispatch => {
    // find item
    let newId = itemId.slice(1);
    let itemRef = db.collection("store-inventory").doc(newId);

    console.log(newId);
    itemRef
      .update({
        ownerId: "DNE"
      })
      .then(() => {
        let petRef = db.collection("pets").doc(petId);
        if (type === "toy") {
          petRef.update({
            happiness: firebase.firestore.FieldValue.increment(10),
            love: firebase.firestore.FieldValue.increment(10)
          });
        } else if (type === "food") {
          petRef.update({
            satiety: firebase.firestore.FieldValue.increment(10)
          });
        }
        console.log("Updated!");
        history.push("/my-pets");
      })
      .catch(err => console.log("failed to update document" + err));
    // update pet quote :)
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
          console.log(priceOfItem);
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
                userRef.update(
                  {
                    tokens: newTokens
                  }
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
    dispatch(fetchStart());
    let currentUser = await firebase.auth().currentUser;
    if (currentUser) {
      let currentUserId = await firebase.auth().currentUser.uid;
      db.collection("store-inventory")
        .where("ownerId", "==", currentUserId)
        .get()
        .then(querySnapshot => {
          let usersItems = [];
          querySnapshot.forEach(doc => {
            usersItems.push(doc.data());
          });
          if (usersItems.length > 0) {
            dispatch(returnUsersItems(usersItems));
          } else {
            dispatch(returnUsersItems("empty"));
          }
        })
        .catch(err => console.log(err));
    } else {
      history.push("/access-denied");
    }
  };
};

export const fetchSpecificItems = type => {
  return async dispatch => {
    dispatch(returnSpecificItems("loading"));
    let currentUser = await firebase.auth().currentUser;
    if (currentUser) {
      let currentUserId = await firebase.auth().currentUser.uid;
      db.collection("store-inventory")
        .where("ownerId", "==", currentUserId)
        .where("type", "==", type)
        .get()
        .then(querySnapshot => {
          let items = [];
          querySnapshot.forEach(doc => {
            items.push(doc.data());
          });
          if (items.length > 0) {
            dispatch(returnSpecificItems(items));
          } else {
            dispatch(returnSpecificItems(null));
          }
        })
        .catch(err => console.log(err));
    } else {
      // this needs to be fixed eventually
      history.push("/access-denied");
    }
  };
};
