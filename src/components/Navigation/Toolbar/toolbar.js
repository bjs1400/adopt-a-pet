import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";

const Toolbar = props => (
  <header className="Toolbar">
    <Link className="logo-link" to="/">
      <h1 className="logo-text">Adopt-A-Pet</h1>
    </Link>
    {props.showAll ? (
      <nav>
        <Navbar />
      </nav>
    ) : null}
  </header>
);

export default Toolbar;
