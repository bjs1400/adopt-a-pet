import React, { Fragment } from "react";
import Pup from "../assets/images/pup.jpg";
import Button from "./UI/Button";

const Card = props => {
  return (
    <Fragment>
      <div class="ui card">
        <div class="image">
          <img src={Pup} alt="pup" />
        </div>
        <div class="content">
          <a className="header">{props.name}</a>
          <div class="meta">
            <span class="date">{props.age} months old</span>
          </div>
          <div class="description">{props.description}</div>
        </div>
        <div className="extra content">
          <Button>Choose Me!</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
