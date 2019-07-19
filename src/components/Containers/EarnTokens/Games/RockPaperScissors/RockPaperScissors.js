import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import withNavbar from "../../../../hoc/withNavbar";

import * as actions from "../../../../../store/actions/index";

class RockPaperScissors extends Component {
  componentDidMount() {
    this.generateCompsChoice();
    console.log("hi");
  }
  state = {
    compsChoice: null // 0=rock, 1=paper, 2=scissors
  };

  generateCompsChoice = () => {
    let choice = Math.floor(Math.random() * 3); // 0, 1, or 2
    this.setState({ compsChoice: choice });
    console.log(choice);
  };

  userWin = () => {
    alert("YOU WIN!");
    this.props.updateTokens("add", 20);
    this.generateCompsChoice();
  };

  userLose = () => {
    this.props.updateTokens("subtract", 20);
    this.generateCompsChoice();
  };

  setUsersChoice = usersChoice => {
    switch (usersChoice) {
      case "rock":
        if (this.state.compsChoice === 1) {
          return () => {
            this.userLose();
            alert("Computer chooses paper. You lose.");
          };
        } else if (this.state.compsChoice === 2) {
          return () => {
            this.userWin();
            alert("Computer choose scissors. You Win!");
          };
        } else {
          return () => {
            alert("TIE!");
            this.generateCompsChoice();
          };
        }
      case "paper":
        if (this.state.compsChoice === 0) {
          return () => {
            this.userWin();
            alert("Computer chose rock. YOU WIN!");
          };
        } else if (this.state.compsChoice === 2) {
          return () => {
            this.userLose();
            alert("Computer chose scissors. YOU LOSE!");
          };
        } else {
          return () => {
            alert("TIE!");
            this.generateCompsChoice();
          };
        }
      case "scissors":
        if (this.state.compsChoice === 0) {
          return () => {
            this.userLose();
            alert("Computer chose rock. YOU LOSE!");
          };
        } else if (this.state.compsChoice === 1) {
          return () => {
            this.userWin();
            alert("Computer chose paper. YOU WIN!");
          };
        } else {
          return () => {
            alert("TIE!");
            this.generateCompsChoice();
          };
        }
      default:
        return "TIE!";
    }
  };

  render() {
    return (
      <div className="rps-main-container">
        <h1 style={{ color: "blue" }}>ROCK, PAPER, SCISSORS</h1>
        <h2>
          EVERY WIN EARNS YOU{" "}
          <span style={{ color: "gold" }}>10 TOKENS...</span>
        </h2>
        <h3 style={{ color: "red" }}>
          BUT BE CAREFUL...LOSE &amp; YOU WILL BE DEDUCTED 5 TOKENS!
        </h3>
        <h2>CHOOSE AN ITEM TO GET STARTED! </h2>
        <Link to="/earn-tokens">BACK TO GAMES</Link>
        <div className="game-container">
          <div className="rps-container">
            <div
              style={{ transform: "translateY(12px)" }}
              className="ui raised card rps-card rps-rock"
              onClick={() => this.setUsersChoice("rock")()}
            >
              ROCK
            </div>
            <div
              onClick={() => this.setUsersChoice("paper")()}
              className="ui raised card rps-card rps-paper"
            >
              PAPER
            </div>
            <div
              onClick={() => this.setUsersChoice("scissors")()}
              className="ui raised card rps-card rps-scissors"
            >
              SCISSORS
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTokens: (type, amount) => dispatch(actions.updateTokens(type, amount))
  };
};

const wrappedComponent = connect(
  null,
  mapDispatchToProps
)(RockPaperScissors);

export default withNavbar(wrappedComponent);
