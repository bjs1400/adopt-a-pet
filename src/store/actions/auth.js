import firebase from "../../config/firebaseConfig";
import history from "../../history";
const db = firebase.firestore();

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

export const authSuccess = (user, token) => {
  return {
    type: "AUTH_SUCCESS",
    currentUser: user,
    token: token
  };
};

export const authFail = errorMessage => {
  return {
    type: "AUTH_FAIL",
    errorMessage: errorMessage
  };
};

export const auth = (email, password) => {
  return async dispatch => {
    dispatch(authStart());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user);
        db.collection("users")
          .doc(res.user.uid)
          .set({
            userId: res.user.uid,
            email: email,
            tokens: 100
          })
          .then(res => {
            history.push("/home");
          })
          .catch(err => console.log("Error adding new user to db: " + err));
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
        history.push("/home");
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
      .then(() => {
        dispatch(authLogout());
        history.push("/");
      })
      .catch(err => console.log(err));
  };
};

export const clearErrorMessage = () => {
  return {
    type: "CLEAR_ERROR"
  };
};

export const checkAuthState = () => {
  return dispatch => {
    dispatch(clearErrorMessage());
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authSuccess(user));
      } else {
        dispatch(authFail());
      }
    });
  };
};
