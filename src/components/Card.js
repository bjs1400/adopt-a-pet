import React, { Fragment } from "react";
import Button from "./UI/Button";

const Card = props => {
  let chooseButton = props.btnContent ? (
    <div className="extra content">
      <Button btnClass={`${props.btnClass}`} clicked={props.viewPet}>
        {props.btnContent}
      </Button>
    </div>
  ) : null;

  let description = props.description ? (
    <div class="description">{props.description}</div>
  ) : null;

  let age = props.age ? (
    <div class="meta">
      <span class="date">{props.age} months old</span>
    </div>
  ) : null;

  return (
    <Fragment>
      <div class="ui card">
        <div class="image">
          <img src={props.imgsrc} alt="pup" />
        </div>
        <div class="content">
          <a className="header">{props.name}</a>
          {age}
          {description}
        </div>
        {chooseButton}
      </div>
    </Fragment>
  );
};

export default Card;
