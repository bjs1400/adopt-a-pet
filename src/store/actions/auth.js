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

export const authFail = err => {
  return {
    type: "AUTH_FAIL",
    errorMessage: err.message
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
        dispatch(authFail(err));
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
        dispatch(authFail(err.message));
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
  return {};
};
