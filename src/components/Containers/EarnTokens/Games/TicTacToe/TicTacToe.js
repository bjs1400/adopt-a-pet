import React, { Component } from "react";
import { Link } from "react-router-dom";
import withNavbar from "../../../../hoc/withNavbar";
import TicTacToeSquare from "./TicTacToeSquare";
import x from "../../../../../assets/images/tic-tac-toe-X.png";
import o from "../../../../../assets/images/c.png";

class TicTacToe extends Component {
  //   componentDidUpdate() {
  //     if (this.state.turn % 2 === 0) {
  //       // set contents to o
  //       this.setState({
  //         contents: o
  //       });
  //     } else {
  //       //set contents to x
  //       this.setState({
  //         contents: x
  //       });
  //     }
  //   }

  state = {
    turn: 1,
    ref1enabled: true,
    ref2enabled: true,
    ref3enabled: true,
    ref4enabled: true,
    ref5enabled: true,
    ref6enabled: true,
    ref7enabled: true,
    ref8enabled: true,
    ref9enabled: true,
    contents: x,
    show: false
  };

  squareClicked = ref => {
    this.setState({
      show: true
    });
    // this.setState(state => {
    //   //increase turn
    //   return {
    //     turn: state.turn + 1
    //   };
    // });
    // set the clicked square to not enabled
  };

  computersTurn = selected => {
    // switch (selected) {
    //   case "1": {
    //     if (this.state.ref2enabled) {
    //       return ref2;
    //     } else if (this.state.ref4enabled) {
    //       return ref4;
    //     } else if (this.state.ref5enabled) {
    //       return ref5;
    //     } else {
    //       return ref9;
    //     }
    //   }
    //   default: {
    //     return ref9;
    //   }
    // }
  };

  render() {
    return (
      <>
        <h1>TIC TAC TOE</h1>
        <h2>Click a square below to get started!</h2>
        <Link to="/earn-tokens">Back to Games</Link>
        <div className="game-container">
          <div className="tic-tac-toe-container">
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="1"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="2"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="3"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="4"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="5"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="6"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="7"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="8"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              show={this.state.show}
              clicked={ref => this.squareClicked(ref)}
              id="9"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
          </div>
        </div>
      </>
    );
  }
}

export default withNavbar(TicTacToe);

// createRef (1-9)
// player clicks on first square, which results in it showing an x
// pop up shows up telling player Computer's turn
// computer smartly picks a square to place their o
// player picks another square which hasnt been selected
// computer turn
// player turn & from now on check for winner after every selection
