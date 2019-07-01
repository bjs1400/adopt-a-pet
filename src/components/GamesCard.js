import React from "react";
import { Link } from "react-router-dom";

const GamesCard = props => {
  return (
    <Link to={props.link}>
      <div className="games-card">CONTENT</div>
    </Link>
  );
};

export default GamesCard;
