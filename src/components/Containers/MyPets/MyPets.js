import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import withNavbar from "../../hoc/withNavbar";
import { Link } from "react-router-dom";
import PetBox from "./PetBox";
import Pup from "../../../assets/images/pup.jpg";

import * as actions from "../../../store/actions/index";

class MyPets extends Component {
  componentDidMount() {
    this.props.fetchUsersPets();
  }
  state = {
    quote: "A pet is your best friend"
  };
  render() {
    let myPets = this.props.usersPets ? (
      this.props.usersPets.map(pet => {
        return (
          <PetBox
            key={pet.id}
            name={pet.name}
            age={pet.age}
            imgsrc={Pup}
            petQuote="Test Quote"
          />
        );
      })
    ) : (
      <h1>
        You don't have any pets yet. You must be lonely! Visit the{" "}
        <Link to="/adopt">Adoption Center</Link> to adopt a pet!
      </h1>
    );

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
const mapStateToProps = state => {
  return {
    usersPets: state.adopt.usersPets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersPets: () => dispatch(actions.fetchUsersPets())
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPets);

export default withNavbar(requireAuth(wrappedComponent));
