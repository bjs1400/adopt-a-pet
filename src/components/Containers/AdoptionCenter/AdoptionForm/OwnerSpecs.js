import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class OwnerSpecs extends Component {
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
          Owner Specs
        </h2>
        <FormControl className="inputField">
          <InputLabel htmlFor="owner-name">Owner's Name</InputLabel>
          <Input
            defaultValue="Owner's Name"
            id="owner-name"
            value={values.ownerName}
            onChange={this.props.handleChange("ownerName")}
          />
        </FormControl>
        <FormControl className="inputField">
          <InputLabel htmlFor="owner-occupation">Owner's Occupation</InputLabel>
          <Input
            defaultValue="Owner's Occupation"
            id="owner-occupation"
            value={values.ownerOccupation}
            onChange={this.props.handleChange("ownerOccupation")}
          />
        </FormControl>
        <Button
          clicked={this.props.nextStep}
          variant="contained"
          color="primary"
          className="adoption-btn"
        >
          Next
        </Button>
      </div>
    );
  }
}

export default OwnerSpecs;
