import React, { Component } from "react";
import withNavbar from "../../hoc/withNavbar";
import GamesCard from "../../GamesCard";
import TTT from "../../../assets/images/tic-tac-toe.jpg";
import RPS from "../../../assets/images/rock-paper-scissors.png";

class EarnTokens extends Component {
  render() {
    return (
      <>
        <h1>Play Games, Earn Tokens, and Keep Your Pet Happy and Well!</h1>
        <h2
          style={{
            marginBottom: "2%"
          }}
        >
          GAMES
        </h2>
        <div className="games-container">
          <GamesCard
            link="/earn-tokens/tic-tac-toe"
            imgsrc={TTT}
            label="TIC TAC TOE"
          />
          <GamesCard
            link="/earn-tokens/rock-paper-scissors"
            imgsrc={RPS}
            label="ROCK, PAPER, SCISSORS"
          />
          <GamesCard />
          <GamesCard />
          <GamesCard />
          <GamesCard />
        </div>
      </>
    );
  }
}

export default withNavbar(EarnTokens);
