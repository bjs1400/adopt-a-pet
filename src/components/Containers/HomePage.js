import React, { Component } from "react";
import { connect } from "react-redux";
import withNavbar from "../hoc/withNavbar";
import { Redirect } from "react-router-dom";
import GamesCard from "../GamesCard";
import Pup from "../../assets/images/pup.jpg";
import TTT from "../../assets/images/tic-tac-toe.jpg";
import Bone from "../../assets/images/bone.jpg";

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
          <GamesCard link="/adopt" imgsrc={Pup} label="ADOPT" />
          <GamesCard link="/earn-tokens" imgsrc={TTT} label="PLAY GAMES" />
          <GamesCard link="/pet-shop" imgsrc={Bone} label="SHOP FOR MY PETS" />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  };
};

const wrappedComponent = connect(mapStateToProps)(HomePage);

export default withNavbar(wrappedComponent);
