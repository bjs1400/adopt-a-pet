import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "./config/firebaseConfig";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    return () => {
      let user = firebase.auth().currentUser;
      console.log(user);
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    };
  });

  return (
    <Route
      {...rest}
      render={(
        props //this renders when the path matches
      ) =>
        //check for user authentication
        isAuth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/access-denied" />
        )
      }
    />
  );
};

export default PrivateRoute;
