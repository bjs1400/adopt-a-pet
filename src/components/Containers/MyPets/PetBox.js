import React from "react";
import Card from "../../Card";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

const PetBox = props => {
  // imgsrc, name, age, petQuote are props
  return (
    <div className="my-pet-box">
      <div className="left-side">
        <Card imgsrc={props.imgsrc} name={props.name} age={props.age} />
        <div className="feed-play">
          <Link to="/">
            <Button btnClass="ui green button">Feed</Button>
          </Link>
          <Link to="/">
            <Button btnClass="ui blue button">Play With</Button>
          </Link>
        </div>
      </div>
      <div className="right-side">
        <h4>Happiness:</h4>
        <div className="bar" />
        <h4>Satiety:</h4>
        <div className="bar" />
        <h4>Love for Owner:</h4>
        <div className="bar" />
        <h4>
          {props.name} says: {props.petQuote}
        </h4>
      </div>
    </div>
  );
};

export default PetBox;
