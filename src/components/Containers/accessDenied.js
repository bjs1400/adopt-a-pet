import React from "react";
import { Link } from "react-router-dom";
import withNavbar from "../hoc/withNavbar";

const accessDenied = () => {
  return (
    <>
      <h1>ACCESS DENIED</h1>
      <h2>You do not have permission to view this page.</h2>
      <Link to="/">Back to Adopt-A-Pet</Link>
    </>
  );
};

export default withNavbar(accessDenied);
