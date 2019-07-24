import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../../config/firebaseConfig";

export default ChildComponent => {
  class RequireAuth extends Component {
    componentDidMount() {
      let user = firebase.auth().currentUser;
      console.log(user);
      if (user) {
        this.setState({
          isAuthenticated: true
        });
      } else {
        this.setState({
          isAuthenticated: false
        });
      }
    }
    state = {
      isAuthenticated: false
    };
    render() {
      let redirect = this.state.isAuthenticated ? null : (
        <Redirect to="/access-denied" />
      );
      return (
        <>
          <ChildComponent {...this.props} />
          {redirect}
        </>
      );
    }
  }
  return RequireAuth;
};
