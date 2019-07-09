import history from "../../history";
import firebase from "../../config/firebaseConfig";
const db = firebase.firestore();

export const nextStep = () => {
  return {
    type: nextStep
  };
};

export const prevStep = () => {
  return {
    type: prevStep
  };
};

export const returnPets = pets => {
  return {
    type: "RETURN_PET",
    pets: pets
  };
};

export const fetchPets = () => {
  return dispatch => {
    let petsRef = db.collection("pets");
    petsRef
      .get()
      .then(querySnapshot => {
        let petsArray = [];
        querySnapshot.forEach(doc => {
          petsArray.push({ ...doc.data(), petId: doc.id });
          console.log(`doc id: ${doc.id}`);
        });
        dispatch(returnPets(petsArray));
      })
      .catch(err => console.log(err));
  };
};

export const fetchUsersPets = () => {
  return async dispatch => {
    var currentUserId = await firebase.auth().currentUser.uid;
    var ownersRef = db.collection("owners");
    console.log(currentUserId);
    let ownerQuery = ownersRef.where("ownerId", "==", `${currentUserId.toString()}`);
    ownerQuery
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log("No such document exists.");
        }
      })
      .catch(err => console.log(err));
  };
};

export const assignPetToUser = petId => {
  return async dispatch => {
    var currentUserId = await firebase.auth().currentUser.uid;
    var petRef = db.collection("pets").doc(`${petId}`);
    petRef
      .get()
      .then(doc => {
        console.log(doc.data());
        db.collection("owners")
          .add({
            ownerId: currentUserId,
            pets: [
              {
                ...doc.data()
              }
            ]
          })
          .then(docRef =>
            // delete pet from database
            petRef
              .delete()
              .then(history.push("/my-pets"))
              .catch(err => console.log(err))
          )
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
};
