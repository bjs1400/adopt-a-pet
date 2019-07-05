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
          petsArray.push(doc.data());
          console.log(doc.data().image);
        });
        dispatch(returnPets(petsArray));
      })
      .catch(err => console.log(err));
  };
};
