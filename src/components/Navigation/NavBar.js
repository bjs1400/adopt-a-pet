import React, { Component } from "react";
import { connect } from "react-redux";
import NavItem from "./NavItem";

import * as actions from "../../store/actions/index";

class Navbar extends Component {
  handleSignOut = () => {
    this.props.onLogout();
  };

  render() {
    let direction = this.props.isAuthenticated ? "SIGN OUT" : "SIGN IN";
    let link = this.props.isAuthenticated ? "/" : "/login";
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
        <NavItem clicked={this.handleSignOut} link={link}>
          {direction}
        </NavItem>
      </ul>
    );
    return navlist;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
