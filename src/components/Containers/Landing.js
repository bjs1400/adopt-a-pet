import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
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
};

export default LandingPage;
