import React, { Component } from "react";
import { connect } from "react-redux";
import NavItem from "./NavItem";

import * as actions from "../../store/actions/index";

class Navbar extends Component {
  componentDidMount() {
    this.props.fetchTokens();
  }
  handleSignOut = () => {
    this.props.onLogout();
  };

  render() {
    let tokens = this.props.tokens ? this.props.tokens : null;
    let direction = this.props.isAuthenticated ? "SIGN OUT" : "SIGN IN";
    let navlist = (
      <ul className="navbar-main">
        <NavItem link="/adopt">Adopt</NavItem>
        <NavItem link="/my-pets">My Pets</NavItem>
        <NavItem link="/pet-shop">Pet Shop</NavItem>
        <NavItem link="/earn-tokens">Earn Tokens</NavItem>
        <NavItem link="/inventory">
          <span
            style={{
              color: "goldenrod",
              fontWeight: "lighter"
            }}
          >
            Tokens: {tokens}
          </span>
        </NavItem>
        <NavItem clicked={this.handleSignOut}>{direction}</NavItem>
      </ul>
    );
    return navlist;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    fetchTokens: () => dispatch(actions.fetchTokens())
  };
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    tokens: state.tokens.tokens
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
