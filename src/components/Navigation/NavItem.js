import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <li className="NavItem">
      <NavLink
        activeClassName="active-link"
        onClick={props.clicked}
        className="nav-link"
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default Navbar;
