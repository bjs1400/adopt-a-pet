import React from "react";
import { Link } from "react-router-dom";
import withNavbar from "../hoc/withNavbar";

const accessDenied = () => {
  return (
    <>
      <h1>ACCESS DENIED</h1>
      <h2>Error: You must be signed in to view this page.</h2>
      <h2>
        <Link to="login">Sign In</Link> or <Link to="/signup">Sign Up</Link> to
        access this page.
      </h2>
      <Link to="/">Back to Adopt-A-Pet</Link>
    </>
  );
};

export default withNavbar(accessDenied);
