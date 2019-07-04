import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class LandingPage extends Component {
  render() {
    let isAuth = this.props.isAuthenticated ? <Redirect to="/home" /> : null;
    return (
      <div className="landing-page">
        {isAuth}
        <div className="landing-container">
          <div className="row-one">
            <Link to="/login">Log In </Link>to access your pets
          </div>
          <div className="row-two">
            <h1>ADOPT-A-PET</h1>
            <h2>Adopt a Virtual Pet Today!</h2>
          </div>
          <div className="row-three">
            <Link to="/signup">Sign Up</Link> or
            <Link to="/adopt">View All Pets</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(LandingPage);
