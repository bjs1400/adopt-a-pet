import React from "react";

const TicTacToeSquare = props => {
  var display = props.show ? props.children : "";
  return (
    <div onClick={props.clicked} className="ttt-sq" id="ttt-1">
      {display}
    </div>
  );
};

export default TicTacToeSquare;
