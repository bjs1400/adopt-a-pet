import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  class RequireAuth extends Component {
    // componentDidMount() {
    //   let user = firebase.auth().currentUser;
    //   console.log(user);
    //   if (user) {
    //     this.setState({
    //       isAuthenticated: true
    //     });
    //   } else {
    //     this.setState({
    //       isAuthenticated: false
    //     });
    //   }
    // }
    // state = {
    //   isAuthenticated: false
    // };
    render() {
      let redirect = this.props.isAuthenticated ? null : (
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

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.currentUser
    };
  };

  return connect(mapStateToProps)(RequireAuth);
};
