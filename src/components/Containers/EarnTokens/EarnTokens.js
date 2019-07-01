import React, { Component } from "react";
import GamesCard from "../../GamesCard";

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
          <GamesCard />
          <GamesCard />
          <GamesCard />
          <GamesCard />
          <GamesCard />
          <GamesCard />
        </div>
      </>
    );
  }
}

export default EarnTokens;
