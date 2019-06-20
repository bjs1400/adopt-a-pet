import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Card from "../../Card";
import Modal from "../../UI/Modal/Modal";
import ShowPet from "./ShowPet";
import Pup from "../../../assets/images/pup.jpg";

class AdoptionCenter extends Component {
  state = {
    show: false,
    shownPetId: null, // id property
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
        name: "Jason",
        age: 6,
        description:
          "play with Jason all day, and youll have loads of fun -- plus he loves treats!",
        id: 7
      }
    ]
  };

  cancelHandler = () => {
    this.setState({
      show: false
    });
  };
  viewPet = id => {
    this.setState({ show: true }); // show our modal
    this.setState({ shownPetId: id });
  };
  adoptContinue = id => {
    alert("You purchased pet: " + id);
  };

  render() {
    let cardList = this.state.pets.map(pet => {
      return (
        <div className="pet-square">
          <Card
            key={pet.id}
            btnContent="Choose Me!"
            btnClass="ui button primary"
            imgsrc={Pup}
            viewPet={() => this.viewPet(pet.id)}
            name={pet.name}
            age={pet.age}
            description={pet.description}
          />
        </div>
      );
    });
    return (
      // ** FOR NOW WE PASS IN OUR PET LIST TO SHOWPET, BUT LATER WE WONT NEED TO BC WE'LL USE REDUX for pets list
      <Fragment>
        <Modal show={this.state.show} modalClosed={this.cancelHandler}>
          <ShowPet
            name={this.state.pets[0].name}
            age={this.state.pets[0].age}
            adoptContinue={() => this.adoptContinue(this.state.shownPetId)}
            hidePet={this.cancelHandler}
            id={this.state.shownPetId}
          />
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
