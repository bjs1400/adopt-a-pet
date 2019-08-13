import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import withNavbar from "../../hoc/withNavbar";
import Card from "../../Card";
import Modal from "../../UI/Modal/Modal";
import ShowPet from "./ShowPet";
import Spinner from "../../UI/Spinner/Spinner";
import Pup from "../../../assets/images/pup.jpg";
import * as actions from "../../../store/actions/index";


class AdoptionCenter extends Component {
  componentDidMount() {
    this.props.fetchPets();
    console.log(this.props.isAuthenticated);
  }

  state = {
    zindex: 20,
    show: false,
    shownPet: {
      name: null,
      age: null,
      desc: null,
      imgsrc: null
    },
    showAdoptionForm: false,
    currPetId: null
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

  viewPet = (id, name, age, desc, imgsrc) => {
    this.setState({
      currPetId: id,
      zindex: 500,
      show: true,
      shownPet: { name, age, desc, imgsrc },
      showAdoptionForm: false
    }); // show our modal
  };

  adoptContinue = id => {
    let res = window.confirm("Are you sure you want to adopt this pet?");
    if (res) {
      this.props.assignPetToUser(id);
    }
    this.cancelHandler();
  };

  render() {
    var cardList = this.props.loading ? (
      <>
        <Spinner />
        <Spinner />
        <Spinner />
      </>
    ) : (
      this.props.pets.map(pet => {
        return (
          <div key={pet.id} className="pet-square">
            <Card
              key={pet.id}
              btnContent="Choose Me!"
              btnClass="ui button primary"
              imgsrc={pet.imageURL ? pet.imageURL : Pup}
              btnClicked={() =>
                this.viewPet(
                  pet.id,
                  pet.name,
                  pet.age,
                  pet.description,
                  pet.imageURL
                )
              }
              name={pet.name}
              age={pet.age}
              description={pet.description}
            />
          </div>
        );
      })
    );

    let heading = !this.props.isAuthenticated ? ( // fix this later
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

    let showPet = this.props.loading ? (
      <Spinner />
    ) : (
      <ShowPet
        name={this.state.shownPet.name}
        age={this.state.shownPet.age}
        description={this.state.shownPet.desc}
        adoptContinue={() => this.adoptContinue(this.state.currPetId)}
        hidePet={this.cancelHandler}
        imgsrc={this.state.shownPet.imgsrc}
        isAuthenticated={this.props.isAuthenticated}
      />
    );

    return (
      // ** FOR NOW WE PASS IN OUR PET LIST TO SHOWPET, BUT LATER WE WONT NEED TO BC WE'LL USE REDUX for pets list
      <Fragment>
        <Modal
          zindex={this.state.zindex}
          show={this.state.show}
          modalClosed={this.cancelHandler}
        >
          {showPet}
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
    isAuthenticated: state.auth.currentUser,
    pets: state.adopt.pets,
    loading: state.adopt.loading
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
