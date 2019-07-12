import React, { Component } from "react";
import Layout from "../src/components/layout/Layout";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import LandingPage from "../src/components/Containers/Landing";
import AdoptionCenter from "./components/Containers/AdoptionCenter/AdoptionCenter";
import MyPets from "./components/Containers/MyPets/MyPets";
import PetShop from "./components/Containers/PetShop/PetShop";
import InventoryPage from "./components/Containers/InventoryPage";
import Login from "./components/Containers/auth/Login";
import Register from "./components/Containers/auth/Register";
import EarnTokens from "./components/Containers/EarnTokens/EarnTokens";
import HomePage from "./components/Containers/HomePage";
import AdoptConfirm from "./components/Containers/AdoptionCenter/AdoptConfirm";
import accessDenied from "./components/Containers/accessDenied";
import TicTacToe from "./components/Containers/EarnTokens/Games/TicTacToe/TicTacToe";

import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuth();
  }

  render() {
    return (
      <div class="container-main">
        <Route path="/" exact component={LandingPage} />
        <Route path="/adopt" component={AdoptionCenter} />
        <Route path="/my-pets" component={MyPets} />
        <Route path="/pet-shop" component={PetShop} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route exact path="/earn-tokens" component={EarnTokens} />
        <Route path="/home" component={HomePage} />
        <Route path="/adopt-confirm" component={AdoptConfirm} />
        <Route path="/access-denied" component={accessDenied} />
        <Route exact path="/earn-tokens/tic-tac-toe" component={TicTacToe} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actions.checkAuthState())
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
)(App);
