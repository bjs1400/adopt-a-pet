import React from "react";
import { Link } from "react-router-dom";

const GamesCard = props => {
  return (
    <Link className="black-react-link" to={props.link}>
      <div className="games-card">
        <div className="gc-img-container">
          <img src={props.imgsrc} alt="games card" />
        </div>
        <div className="games-card-label">
          {props.label ? props.label : "CONTENT"}
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;
