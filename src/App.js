import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

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
import RockPaperScissors from "./components/Containers/EarnTokens/Games/RockPaperScissors/RockPaperScissors";

import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuth();
    this.props.fetchTokens();
    this.props.updatePetStats();
  }

  render() {
    return (
      <div class="container-main">
        <Route path="/" exact component={LandingPage} />
        <Route path="/adopt" component={AdoptionCenter} />
        <ProtectedRoute path="/my-pets" component={MyPets} />
        <Route path="/pet-shop" component={PetShop} />
        <ProtectedRoute path="/inventory" component={InventoryPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <ProtectedRoute exact path="/earn-tokens" component={EarnTokens} />
        <Route path="/home" component={HomePage} />
        <ProtectedRoute path="/adopt-confirm" component={AdoptConfirm} />
        <Route path="/access-denied" component={accessDenied} />
        <ProtectedRoute
          exact
          path="/earn-tokens/tic-tac-toe"
          component={TicTacToe}
        />
        <ProtectedRoute
          exact
          path="/earn-tokens/rock-paper-scissors"
          component={RockPaperScissors}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actions.checkAuthState()),
    fetchTokens: () => dispatch(actions.fetchTokens()),
    updatePetStats: () => dispatch(actions.updatePetStats())
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
