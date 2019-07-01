import React, { Component } from "react";
import NavItem from "./NavItem";

class Navbar extends Component {
  render() {
    let navlist = (
      <ul className="navbar-main">
        <NavItem link="/adopt">Adopt</NavItem>
        <NavItem link="/my-pets">My Pets</NavItem>
        <NavItem link="/pet-shop">Pet Shop</NavItem>
        <NavItem link="/earn-tokens">Earn Tokens</NavItem>
        <NavItem link="/inventory">
          <span
            style={{
              color: "gold",
              fontWeight: "lighter"
            }}
          >
            Tokens: 1000
          </span>
        </NavItem>
        <NavItem link="/">Sign Out</NavItem>
      </ul>
    );
    return navlist;
  }
}

export default Navbar;
