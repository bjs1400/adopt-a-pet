import React, { Fragment } from "react";
import Button from "./UI/Button";

const Card = props => {
  let chooseButton = props.btnContent ? (
    <div className="extra content">
      <Button btnClass={`${props.btnClass}`} clicked={props.btnClicked}>
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

  let classes = props.classes ? props.classes : null;

  return (
    <Fragment>
      <div
        style={{ boxShadow: "4px 6px 20px 2px rgba(0,0,0,1)" }}
        className={`ui card display-card with-shadow ${classes}`}
      >
        <div className="image">
          <img src={props.imgsrc} alt="pup" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          {age}
          {description}
        </div>
        {chooseButton}
      </div>
    </Fragment>
  );
};

export default Card;
