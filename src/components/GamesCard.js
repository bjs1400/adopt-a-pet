import React from "react";
import { Link } from "react-router-dom";

const GamesCard = props => {
  return (
    <Link className="black-react-link" to={props.link}>
      <div className="games-card">
        {props.children ? props.children : "CONTENT"}
      </div>
    </Link>
  );
};

export default GamesCard;
