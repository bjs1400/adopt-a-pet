// content to be render on modal in adoption center (view a specific pet)
import React, { Component } from "react";
import Card from "../../Card";
import Button from "../../UI/Button";
import Pup from "../../../assets/images/pup.jpg";

class ShowPet extends Component {
  state = {
    pets: [
      {
        name: "Bridgette",
        age: 11,
        description: "this pup is so cute, it couldnt possible be real",
        id: 1
      },
      {
        name: "Cory",
        age: 8,
        description:
          "youll fall in love with sweet pup right away, but dont let his charming cute looks deceive you -- treat him wrong and hell make you pay!",
        id: 2
      },
      {
        name: "Jeffrey",
        age: 3,
        description:
          "this sweet pup is brand new -- just born and cute as can be. Will you make him yours?",
        id: 3
      },
      {
        name: "Bradley",
        age: 6,
        description:
          "play with Bradley all day, and youll have loads of fun -- plus he loves treats!",
        id: 4
      },
      {
        name: "Cory",
        age: 8,
        description:
          "youll fall in love with sweet pup right away,dont let his charming cute looks deceive you -- treat him wrong, hell make you pay!",
        id: 5
      },
      {
        name: "Jeffrey",
        age: 3,
        description:
          "this sweet pup is brand new -- just born and cute as can be. Will you make him yours?",
        id: 6
      },
      {
        name: "Bradley",
        age: 6,
        description:
          "play with Bradley all day, and youll have loads of fun -- plus he loves treats!",
        id: 7
      }
    ]
  };
  render() {
    return (
      <div className="show-pet-container">
        <Card imgsrc={Pup} name={this.props.name} age={this.props.age} />
        <div className="attribute-box">
          <div className="attributes" style={{ paddingBottom: "40px" }}>
            <h3 style={{ fontSize: "40px", marginBottom: "20px" }}>
              Attributes
            </h3>
            <div className="attribute-div">
              <span className="attribute">Name:</span> {this.props.name}
            </div>
            <div className="attribute-div">
              <span className="attribute">Age:</span> {this.props.age} months
            </div>
            <div className="attribute-div">
              <span className="attribute">Description:</span>{" "}
              {this.props.description}
            </div>
          </div>
          <div className="buttons" style={{ marginTop: "5%" }}>
            <Button
              btnClass="big ui green button"
              clicked={this.props.adoptContinue}
            >
              ADOPT
            </Button>
            <Button btnClass="big ui red button" clicked={this.props.hidePet}>
              CANCEL
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPet;
