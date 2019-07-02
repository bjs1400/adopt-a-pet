import firebase from "../../config/firebaseConfig";

// export const authStart = () => {
//   return {
//     type: "AUTH_START"
//   };
// };

export const authSuccess = user => {
  return {
    type: "AUTH_SUCCESS",
    currentUser: user
  };
};

export const authFail = err => {
  return {
    type: "AUTH_FAIL",
    error: err
  };
};

export const auth = (email, password) => {
  return dispatch => {
    // dispatch(authStart());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
