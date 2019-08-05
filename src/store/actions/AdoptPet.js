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
    let petsRef = db.collection("pets").where("ownerId", "==", "DNE");
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
      let currentUserId = await firebase.auth().currentUser.uid;

      let petsRef = db.collection("pets");
      let petQuery = petsRef.where("ownerId", "==", currentUserId);
      petQuery
        .get()
        .then(querySnapshot => {
          let usersPets = [];
          querySnapshot.forEach(doc => {
            console.log(doc.data());
            usersPets.push({ ...doc.data() });
          });
          if (usersPets.length >= 1) {
            dispatch(returnUsersPets(usersPets));
          } else {
            dispatch(returnUsersPets("empty"));
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
      .set(
        {
          ownerId: currentUserId
        },
        { merge: true }
      )
      .then(history.push("/my-pets"))
      .catch(err => console.log(err));
    // .get()
    // .then(doc => {
    //   console.log(doc.data());
    //   db.collection("owners")
    //     .add({
    //       ownerId: currentUserId,
    //       pets: [
    //         {
    //           ...doc.data()
    //         }
    //       ]
    //     })
    //     .then(docRef =>
    //       // delete pet from database
    //       petRef
    //         .delete()
    //         .then(history.push("/my-pets"))
    //         .catch(err => console.log(err))
    //     )
    //     .catch(err => console.log(err));
    // })
    // .catch(err => console.log(err));
  };
};
