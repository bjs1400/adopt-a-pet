import React, { Component } from "react";
import NavItem from "./NavItem";

class Navbar extends Component {
  render() {
    let navlist = (
      <ul className="navbar-main">
        <NavItem link="/adopt">Adopt</NavItem>
        <NavItem link="/my-pets">My Pets</NavItem>
        <NavItem link="/pet-shop">Pet Shop</NavItem>
        <NavItem link="/inventory">Tokens: 1000</NavItem>
        <NavItem link="/">Sign Out</NavItem>
      </ul>
    );
    return navlist;
  }
}

export default Navbar;
