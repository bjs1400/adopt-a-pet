import firebase from "../../config/firebaseConfig";
const db = firebase.firestore();

export const returnItems = inventory => {
  return {
    type: "RETURN_INVENTORY",
    inventory: inventory
  };
};

export const fetchInventory = () => {
  return dispatch => {
    let itemsRef = db.collection("store-inventory");
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
  };
};
