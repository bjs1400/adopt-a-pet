import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import withNavbar from "../../hoc/withNavbar";
import Card from "../../Card";
import Modal from "../../UI/Modal/Modal";
import ShowPet from "./ShowPet";
import Spinner from "../../UI/Spinner/Spinner";
import AdoptConfirm from "./AdoptConfirm";
import Pup from "../../../assets/images/pup.jpg";
import * as actions from "../../../store/actions/index";

import history from "../../../history";

class AdoptionCenter extends Component {
  componentDidMount() {
    this.props.fetchPets();
  }

  state = {
    zindex: 20,
    show: false,
    shownPetId: null, // id property
    showAdoptionForm: false
    // pets: [
    //   {
    //     name: "Brittany",
    //     age: 11,
    //     description: "this pup is so cute, it couldnt possible be real",
    //     id: 1
    //   },
    //   {
    //     name: "Rocky",
    //     age: 8,
    //     description:
    //       "youll fall in love with sweet pup right away, but dont let his charming cute looks deceive you -- treat him wrong and hell make you pay!",
    //     id: 2
    //   },
    //   {
    //     name: "Jeffrey",
    //     age: 3,
    //     description:
    //       "this sweet pup is brand new -- just born and cute as can be. Will you make him yours?",
    //     id: 3
    //   },
    //   {
    //     name: "Bradley",
    //     age: 6,
    //     description:
    //       "play with Bradley all day, and youll have loads of fun -- plus he loves treats!",
    //     id: 4
    //   },
    //   {
    //     name: "Cory",
    //     age: 8,
    //     description:
    //       "youll fall in love with sweet pup right away,dont let his charming cute looks deceive you -- treat him wrong, hell make you pay!",
    //     id: 5
    //   },
    //   {
    //     name: "Socksamus",
    //     age: 3,
    //     description:
    //       "this sweet pup is brand new -- just born and cute as can be. Will you make him yours?",
    //     id: 6
    //   },
    //   {
    //     name: "Bella Rose",
    //     age: 6,
    //     description:
    //       "play with Jason all day, and youll have loads of fun -- plus he loves treats!",
    //     id: 7
    //   }
    // ]
  };

  cancelHandler = () => {
    this.setState({
      zindex: 20,
      show: false,
      showAdoptionForm: false
    });
  };

  viewPet = id => {
    this.setState({
      zindex: 500,
      show: true,
      shownPetId: id,
      showAdoptionForm: false
    }); // show our modal
  };

  adoptContinue = id => {
    this.props.assignPetToUser(id);
    this.setState({
      show: false
    });
  };

  render() {
    var cardList = !this.props.pets ? (
      <div>
        <Spinner />
        <Spinner />
        <Spinner />
      </div>
    ) : (
      this.props.pets.map(pet => {
        return (
          <div key={pet.id} className="pet-square">
            <Card
              key={pet.id.toString()}
              btnContent="Choose Me!"
              btnClass="ui button primary"
              imgsrc={Pup}
              btnClicked={() => this.viewPet(pet.petId)}
              name={pet.name}
              age={pet.age}
              description={pet.description}
            />
          </div>
        );
      })
    );

    let heading = !this.props.isAuthenticated ? (
      <>
        <Link to="/signup">
          <h1>SIGN UP</h1>
        </Link>{" "}
        or{" "}
        <Link to="/login">
          <h1>LOGIN</h1>
        </Link>{" "}
        to begin adopting!
      </>
    ) : (
      <h1>CHOOSE A LOVING PET TO TAKE HOME TODAY!</h1>
    );

    return (
      // ** FOR NOW WE PASS IN OUR PET LIST TO SHOWPET, BUT LATER WE WONT NEED TO BC WE'LL USE REDUX for pets list
      <Fragment>
        <Modal
          zindex={this.state.zindex}
          show={this.state.show}
          modalClosed={this.cancelHandler}
        >
          <ShowPet
            name="Test Name"
            age="12"
            adoptContinue={() => this.adoptContinue(this.state.shownPetId)}
            hidePet={this.cancelHandler}
            id={this.state.shownPetId}
          />
        </Modal>
        {heading}
        <div className="adoption-grid">
          <div className="pet-container">{cardList}</div>
          <div className="filter-container" />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    pets: state.adopt.pets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPets: () => dispatch(actions.fetchPets()),
    assignPetToUser: petId => dispatch(actions.assignPetToUser(petId))
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdoptionCenter);

export default withNavbar(wrappedComponent);
