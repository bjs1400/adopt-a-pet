import React, { Component } from "react";

import OwnerSpecs from "./OwnerSpecs";
import PetSpecs from "./PetSpecs";

class AdoptionForm extends Component {
  state = {
    step: 1, // manage STEP in redux!
    ownerName: "",
    ownerOccupation: "",
    petName: "",
    petLivesIn: "",
    petHobbies: []
  };

  // Proceed to next step
  nextStep = () => {
    console.log(this.state.ownerName);
    console.log(this.state.ownerOccupation);
    this.setState(state => ({
      step: state.step + 1
    }));
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change
  handleChange = input => e => {
    console.log(e);
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const {
      ownerName,
      ownerOccupation,
      petName,
      petLivesIn,
      petHobbies
    } = this.state;
    const values = {
      ownerName,
      ownerOccupation,
      petName,
      petLivesIn,
      petHobbies
    };

    switch (step) {
      case 1:
        return (
          <OwnerSpecs
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            petId={this.props.petId}
          />
        );
      case 2:
        return (
          <PetSpecs
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            petId={this.props.petId}
          />
        );
      case 3:
        return <h1>Confirmation</h1>;
      default:
        return null;
    }
  }
}

export default AdoptionForm;
