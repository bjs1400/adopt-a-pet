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
    ref1: {
      show: false,
      enabled: true
    },
    ref2: {
      show: false,
      enabled: true
    },
    ref3: {
      show: false,
      enabled: true
    },
    ref4: {
      show: false,
      enabled: true
    },
    ref5: {
      show: false,
      enabled: true
    },
    ref6: {
      show: false,
      enabled: true
    },
    ref7: {
      show: false,
      enabled: true
    },
    ref8: {
      show: false,
      enabled: true
    },
    ref9: {
      show: false,
      enabled: true
    },
    contents: x,
    show: false
  };

  squareClicked = ref => {
    switch (ref) {
      case "1":
        this.setState({
          ref1: {
            show: true,
            enabled: false
          }
        });
        break;
      case "2": {
        this.setState({
          ref2: {
            show: true,
            enabled: false
          }
        });
        break;
      }
      case "3":
        this.setState({
          ref3: {
            show: true,
            enabled: false
          }
        });
        break;
      case "4": {
        this.setState({
          ref4: {
            show: true,
            enabled: false
          }
        });
        break;
      }
      case "5":
        this.setState({
          ref5: {
            show: true,
            enabled: false
          }
        });
        break;
      case "6": {
        this.setState({
          ref6: {
            show: true,
            enabled: false
          }
        });
        break;
      }
      case "7":
        this.setState({
          ref7: {
            show: true,
            enabled: false
          }
        });
        break;
      case "8": {
        this.setState({
          ref8: {
            show: true,
            enabled: false
          }
        });
        break;
      }
      case "9":
        this.setState({
          ref9: {
            show: true,
            enabled: false
          }
        });
        break;
      default:
        return null;
    }
    this.computersTurn(ref);
  };

  computersTurn = squareRef => {
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
              ref={one => (this.refOne = one)}
              show={this.state.ref1.show}
              clicked={() => this.squareClicked("1")}
              id="1"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={two => (this.refTwo = two)}
              show={this.state.ref2.show}
              clicked={() => this.squareClicked("2")}
              id="2"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={three => (this.refThree = three)}
              show={this.state.ref3.show}
              clicked={() => this.squareClicked("3")}
              id="3"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={four => (this.refFour = four)}
              show={this.state.ref4.show}
              clicked={() => this.squareClicked("4")}
              id="4"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={five => (this.refFive = five)}
              show={this.state.ref5.show}
              clicked={() => this.squareClicked("5")}
              id="5"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={six => (this.refSix = six)}
              show={this.state.ref6.show}
              clicked={() => this.squareClicked("6")}
              id="6"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={seven => (this.refSeven = seven)}
              show={this.state.ref7.show}
              clicked={() => this.squareClicked("7")}
              id="7"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={eight => (this.refEight = eight)}
              show={this.state.ref8.show}
              clicked={() => this.squareClicked("8")}
              id="8"
            >
              <img className="ttt-img" src={this.state.contents} alt="x or o" />
            </TicTacToeSquare>
            <TicTacToeSquare
              ref={nine => (this.refNine = nine)}
              show={this.state.ref9.show}
              clicked={() => this.squareClicked("9")}
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
