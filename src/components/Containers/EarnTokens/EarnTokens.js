import React, { Component } from "react";
import withNavbar from "../../hoc/withNavbar";
import GamesCard from "../../GamesCard";
import TTT from "../../../assets/images/tic-tac-toe.jpg";
import RPS from "../../../assets/images/rock-paper-scissors.png";
import on from "../../../assets/images/1-token.png";
import fo from "../../../assets/images/4-tokens.png";
import tw from "../../../assets/images/12-tokens.png";
import te from "../../../assets/images/28-tokens.png";
import si from "../../../assets/images/60-tokens.png";
import oh from "../../../assets/images/100-tokens.png";
import questionMark from "../../../assets/images/question-mark.png";

class EarnTokens extends Component {
  render() {
    return (
      <>
        <h1 style={{ marginBottom: "5%" }}>
          Play Games, Earn Tokens, and Keep Your Pet Happy and Well!
        </h1>
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
          <GamesCard
            link="/earn-tokens/guessing-game"
            imgsrc={questionMark}
            label="GUESS THE NUMBER"
          />
        </div>
        <h2
          style={{
            marginBottom: "2%"
          }}
        >
          PURCHASE TOKENS
        </h2>
        <div className="games-container">
          <GamesCard label="150 TOKENS" imgsrc={on} />
          <GamesCard label="500 TOKENS" imgsrc={fo} />
          <GamesCard label="1,000 TOKENS" imgsrc={tw} />
          <GamesCard label="5,000 TOKENS" imgsrc={te} />
          <GamesCard label="25,000 TOKENS" imgsrc={si} />
          <GamesCard label="50,000 TOKENS" imgsrc={oh} />
        </div>
      </>
    );
  }
}

export default withNavbar(EarnTokens);
