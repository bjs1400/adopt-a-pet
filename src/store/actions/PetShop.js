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

export const fetchStart = () => {
  return {
    type: "FETCH_START"
  };
};

export const fetchItem = id => {
  return dispatch => {
    dispatch(fetchStart());
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
      })
      .catch(err => console.log(err));
  };
};

export const fetchInventory = () => {
  return async dispatch => {
    let itemsRef = await db
      .collection("store-inventory")
      .where("ownerId", "==", null);
    console.log(itemsRef);
    if (itemsRef) {
      itemsRef
        .get()
        .then(querySnapshot => {
          let itemsArray = [];
          querySnapshot.forEach(doc => {
            itemsArray.push({ ...doc.data(), itemId: doc.id });
            console.log(`doc id: ${doc.id}`);
          });
          dispatch(returnItems(itemsArray));
        })
        .catch(err => console.log(err));
    } else {
      console.log("firebase is the problem");
    }
  };
};

export const purchaseItem = id => {
  return async dispatch => {
    // assign the item to the current user
    //delete it from the database
    dispatch(fetchStart());
    var currentUserId = await firebase.auth().currentUser.uid;
    db.collection("store-inventory")
      .where("id", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id);
          var itemRef = db.collection("store-inventory").doc(doc.id);
          itemRef
            .update({
              ownerId: currentUserId
            })
            .then(() => history.push("/inventory"))
            .catch(err => console.log(console.error()));
        });
      })
      .catch(err => console.log(err));
  };
};

export const fetchUsersItems = () => {
  return async dispatch => {
    var currentUserId = await firebase.auth().currentUser.uid;
    db.collection("store-inventory")
      .where("ownerId", "==", currentUserId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // dispatch(returnUsersItems(doc.data()))
        });
      })
      .catch(err => console.log(err));
  };
};
