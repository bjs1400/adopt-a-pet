import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Card from "../Card";
import Modal from "../UI/Modal/Modal";

class AdoptionCenter extends Component {
  state = {
    show: true,
    pets: [
      {
        name: "Bridgette",
        age: 11,
        description: "this pup is so cute, it couldnt possible be real"
      },
      {
        name: "Cory",
        age: 8,
        description:
          "youll fall in love with sweet pup right away, but dont let his charming cute looks deceive you -- treat him wrong and hell make you pay!"
      },
      {
        name: "Jeffrey",
        age: 3,
        description:
          "this sweet pup is brand new -- just born and cute as can be. Will you make him yours?"
      },
      {
        name: "Bradley",
        age: 6,
        description:
          "play with Bradley all day, and youll have loads of fun -- plus he loves treats!"
      },
      {
        name: "Cory",
        age: 8,
        description:
          "youll fall in love with sweet pup right away,dont let his charming cute looks deceive you -- treat him wrong, hell make you pay!"
      },
      {
        name: "Jeffrey",
        age: 3,
        description:
          "this sweet pup is brand new -- just born and cute as can be. Will you make him yours?"
      },
      {
        name: "Bradley",
        age: 6,
        description:
          "play with Bradley all day, and youll have loads of fun -- plus he loves treats!"
      }
    ]
  };

  cancelHandler = () => {
    this.setState({
      show: false
    });
  };
  render() {
    let cardList = this.state.pets.map(pet => {
      return (
        <div className="pet-square">
          <Card name={pet.name} age={pet.age} description={pet.description} />
        </div>
      );
    });
    return (
      <Fragment>
        <Modal show={this.state.show} modalClosed={this.cancelHandler}>
          <h1>SHOW PET</h1>
        </Modal>
        <span className="adoption-span">
          <Link to="/signup">
            <h1>SIGN UP</h1>
          </Link>
          to begin adopting
        </span>
        <div className="adoption-grid">
          <div className="pet-container">{cardList}</div>
          <div className="filter-container" />
        </div>
      </Fragment>
    );
  }
}

export default AdoptionCenter;
