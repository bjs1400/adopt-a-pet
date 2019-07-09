import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../layout/Layout";

export default ChildComponent => {
  class withNavbar extends Component {
    render() {
      return (
        <Layout showAll={this.props.isAuthenticated}>
          <ChildComponent {...this.props} />
        </Layout>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.currentUser
    };
  };
  return connect(mapStateToProps)(withNavbar);
};
