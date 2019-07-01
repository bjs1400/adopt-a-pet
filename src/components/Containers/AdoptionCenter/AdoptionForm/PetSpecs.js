import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "../../../UI/Button";

class PetSpecs extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div className="container-mui">
        <h1
          style={{
            marginBottom: "2%"
          }}
        >
          You are adopting pet #{this.props.petId}
        </h1>
        <h2
          style={{
            marginBottom: "2%"
          }}
        >
          Pet Specs
        </h2>
        <FormControl className="inputField">
          <InputLabel htmlFor="pet-name">My Pet's Name</InputLabel>
          <Input
            defaultValue="Name Your New Pet"
            id="pet-name"
            value={values.petName}
            onChange={this.props.handleChange("petName")}
          />
        </FormControl>
        <FormControl className="inputField">
          <InputLabel htmlFor="pet-lives">My Pet Lives In: </InputLabel>
          <Input
            defaultValue="Where does your new pet live?"
            id="pet-lives"
            value={values.petLivesIn}
            onChange={this.props.handleChange("petLivesIn")}
          />
        </FormControl>
        <FormControl className="inputField">
          <InputLabel htmlFor="pet-hobbies">My Pet's Hobbies Are: </InputLabel>
          <Input
            defaultValue="Where does your new pet live?"
            id="pet-hobbies"
            value={values.petHobbies}
            onChange={this.props.handleChange("petHobbies")}
          />
        </FormControl>
        <Button btnClass="ui red button" clicked={this.props.nextStep}>
          BACK
        </Button>
        <Button btnClass="ui primary button" clicked={this.props.nextStep}>
          NEXT
        </Button>
      </div>
    );
  }
}

export default PetSpecs;
