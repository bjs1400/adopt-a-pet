import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import GamesCard from "../GamesCard";

// if user doesn't exist, they are redirected to '/'. Otherwise, show them this content

class HomePage extends Component {
  render() {
    console.log(this.props.currentUser);
    let redirected = !this.props.isAuthenticated ? <Redirect to="/" /> : null;
    return (
      <>
        {redirected}
        <h1>Welcome to Adopt-A-Pet</h1>
        <p>
          A site for wanna-be pet parents to adopt loveable animals, play games,
          earn tokens, shop and care for their pet, and more!
        </p>
        <h2>Choose where you'd like to go below: </h2>
        <h1>I WANT TO...</h1>
        <div className="games-container">
          <GamesCard link="/adopt">ADOPT</GamesCard>
          <GamesCard link="/earn-tokens">PLAY GAMES</GamesCard>
          <GamesCard link="/pet-shop">SHOP FOR MY PETS</GamesCard>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.currentUser != null,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(HomePage);
