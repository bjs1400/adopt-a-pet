import React from "react";
import Card from "../../Card";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "../../UI/Button";

const PetBox = props => {
  // imgsrc, name, age, petQuote are props
  return (
    <div className="my-pet-box">
      <div className="left-side">
        <Card
          imgsrc={props.imgsrc}
          name={props.name}
          age={props.age}
          classes="with-shadow"
        />
        <div className="feed-play">
          <Button btnClass="ui green button" clicked={props.feed}>
            Feed
          </Button>
          <Button btnClass="ui blue button" clicked={props.play}>
            Play With
          </Button>
        </div>
      </div>
      <div className="right-side">
        <h4>Happiness:</h4>
        <ProgressBar now={props.happiness} />
        <h4>Satiety:</h4>
        <ProgressBar now={props.satiety} />
        <h4>Love for Owner:</h4>
        <ProgressBar now={props.love} />
        <h4>
          {props.name} says: {props.petQuote}
        </h4>
      </div>
    </div>
  );
};

export default PetBox;
