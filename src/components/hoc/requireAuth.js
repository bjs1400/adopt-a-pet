import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      var redirect = !this.props.isAuthenticated ? (
        <Redirect to="/access-denied" />
      ) : null;
      return (
        <>
          {redirect}
          <ChildComponent {...this.props} />
        </>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };
  return connect(mapStateToProps)(RequireAuth);
};
