import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <li className="NavItem">
      <NavLink className="nav-link" to={props.link} activeClassName="current">
        {props.children}
      </NavLink>
    </li>
  );
};

export default Navbar;
