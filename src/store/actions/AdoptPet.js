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
    type: "RETURN_PETS",
    pets: pets
  };
};

export const returnUsersPets = pets => {
  return {
    type: "RETURN_USERS_PETS",
    usersPets: pets
  };
};

export const fetchStart = () => {
  return {
    type: "FETCH_START"
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
    dispatch(fetchStart());
    if (firebase.auth().currentUser) {
      // if there is a user logged in
      var currentUserId = await firebase.auth().currentUser.uid;
      console.log(currentUserId);
      var ownersRef = db.collection("owners");
      let ownerQuery = ownersRef.where("ownerId", "==", `${currentUserId}`);
      ownerQuery
        .get()
        .then(querySnapshot => {
          let usersPets = [];
          querySnapshot.forEach(doc => {
            usersPets.push(doc.data().pets[0]);
          });
          if (usersPets.length >= 1) {
            dispatch(returnUsersPets(usersPets));
          } else {
            dispatch(returnUsersPets(null));
          }
        })
        .catch(err => console.log(err));
    } else {
      dispatch(returnUsersPets(null));
    }
  };
};

export const assignPetToUser = petId => {
  return async dispatch => {
    var currentUserId = await firebase.auth().currentUser.uid;
    var petRef = db.collection("pets").doc(petId);
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
