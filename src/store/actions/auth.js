import firebase from "../../config/firebaseConfig";

// export const authStart = () => {
//   return {
//     type: "AUTH_START"
//   };
// };

export const authStart = () => {
  return {
    type: "AUTH_START"
  };
};

export const authSuccess = user => {
  return {
    type: "AUTH_SUCCESS",
    currentUser: user
  };
};

export const authFail = errorMessage => {
  return {
    type: "AUTH_FAIL",
    errorMessage: errorMessage
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        console.log(res.user);
        dispatch(authSuccess(res.user));
      })
      .catch(err => {
        if (err.code === "auth/email-already-in-use") {
          dispatch(authFail("User already exists. Please sign in."));
        } else if (err.code === "auth/invalid-email") {
          dispatch(authFail("Please enter a valid email"));
        } else if (err.code === "auth/weak-password") {
          dispatch(authFail("Please choose a stronger password"));
        }
      });
  };
};

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(authSuccess(res.user));
      })
      .catch(err => {
        if (err.code === "auth/wrong-password") {
          dispatch(authFail("Incorrect Password"));
        } else if (err.code === "auth/user-not-found") {
          dispatch(authFail("User not found. Please sign up."));
        } else if (err.code === "auth/invalid-email") {
          dispatch(authFail("Please enter a valid email"));
        }
      });
  };
};

export const authLogout = () => {
  return {
    type: "AUTH_LOGOUT"
  };
};

export const logout = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch(authLogout()))
      .catch(err => console.log(err));
  };
};

export const checkAuthState = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authSuccess(user));
      } else {
        dispatch(authFail());
      }
    });
  };
};
