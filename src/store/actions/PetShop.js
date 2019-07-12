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

export const fetchItem = id => {
  return dispatch => {
    console.log(id);
    let itemRef = db.collection("store-inventory").where("id", "==", `${id}`);
    itemRef
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          dispatch(fetchItem(doc.data()));
        });
      })
      .catch(err => console.log(err));
  };
};

export const fetchInventory = () => {
  return dispatch => {
    let itemsRef = db.collection("store-inventory");
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
