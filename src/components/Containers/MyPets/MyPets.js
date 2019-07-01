import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetBox from "./PetBox";
import Pup from "../../../assets/images/pup.jpg";

class MyPets extends Component {
  state = {
    quote: "A pet is your best friend",
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
      }
    ]
  };
  render() {
    let myPets = this.state.pets.map(pet => {
      return (
        <PetBox
          key={pet.id}
          name={pet.name}
          age={pet.age}
          imgsrc={Pup}
          petQuote="Test Quote"
        />
      );
    });
    return (
      <>
        <h1>MY TRIBE</h1>
        <div className="my-pets-container">
          {myPets}
          <div className="quote-box">
            <h1>QUOTE OF THE DAY: </h1>
            {this.state.quote}
          </div>
          <div className="inventory-box-my-pets">Inventory Box</div>
        </div>
        <h2
          style={{
            marginTop: "5%",
            textAlign: "center"
          }}
        >
          Want more Pets? Visit the{" "}
          <Link to="/adopt">
            <em>Adoption Center</em>
          </Link>
        </h2>
      </>
    );
  }
}

export default MyPets;
