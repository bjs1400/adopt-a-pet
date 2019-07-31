import React, { Component } from "react";
import { connect } from "react-redux";
import withNavbar from "../../hoc/withNavbar";
import { Link } from "react-router-dom";
import PetBox from "./PetBox";
import Card from "../../Card";
import Pup from "../../../assets/images/pup.jpg";
import Bone from "../../../assets/images/bone.jpg";
import Spinner from "../../UI/Spinner/Spinner";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button";

import * as actions from "../../../store/actions/index";

class MyPets extends Component {
  componentDidMount() {
    this.props.fetchUsersPets();
    this.props.fetchUsersItems();
    this.fetchRandomQuote();
  }
  state = {
    zindex: -1,
    show: false,
    quote: "quote",
    petName: null
  };

  cancelHandler = () => {
    this.setState({
      show: false,
      zindex: -1
    });
  };

  useItem = (petId, petName, type) => {
    this.setState({
      zindex: 500,
      show: true,
      petName: petName
    });
    this.props.fetchSpecificItems(type);
  };

  beginUsing = () => {};

  fetchRandomQuote = () => {};

  render() {
    let myPets = this.props.loadingS
      ? () => (
          <>
            <Spinner />
            <Spinner />
            <Spinner />
          </>
        )
      : () => {
          if (!this.props.usersPets) {
            return (
              <div
                style={{
                  gridColumnStart: "1",
                  gridColumnEnd: "4"
                }}
              >
                <h1>You don't have any pets yet. You must be lonely.</h1>
                <h2>
                  Visit the <Link to="/adopt">Adoption Center</Link> to start
                  adopting!
                </h2>
              </div>
            );
          } else {
            return this.props.usersPets.map(pet => {
              return (
                <PetBox
                  key={pet.id}
                  name={pet.name}
                  age={pet.age}
                  imgsrc={Pup}
                  petQuote="Test Quote"
                  happiness={pet.happiness}
                  satiety={pet.satiety}
                  love={pet.love}
                  play={() => this.useItem(pet.id, pet.name, "toy")}
                  feed={() => this.useItem(pet.id, pet.name, "food")}
                />
              );
            });
          }
        };

    let inventoryItems = !this.props.usersItems ? (
      <Spinner />
    ) : (
      this.props.usersItems.map(item => {
        return (
          <Card classes="pets-inventory-item" name={item.name} imgsrc={Bone} />
        );
      })
    );

    let specificItems = !this.props.specificItems ? (
      <Spinner />
    ) : (
      <>
        <h1>SELECT AN ITEM BELOW TO USE ON YOUR PET</h1>
        <div className="grname-container-use-item">
          {this.props.specificItems.map(item => {
            return (
              <div className="item-box-use-item" onClick={this.beginUsing}>
                <img src={Bone} alt="bone" />
                <div className="item-name">{item.name}</div>
              </div>
            );
          })}
          <div className="pet-box-use-item" />
        </div>
        <Button clicked={this.cancelHandler} btnClass="ui red button">
          CANCEL
        </Button>
      </>
    );

    return (
      <>
        <h1 style={{ marginBottom: "35px" }}>MY TRIBE</h1>
        <Modal
          zindex={this.state.zindex}
          show={this.state.show}
          modalClosed={this.cancelHandler}
        >
          {specificItems}
        </Modal>
        <div className="my-pets-container">
          {myPets()}
          <div className="quote-box">
            <h1>QUOTE OF THE DAY: </h1>
            {this.state.quote}
          </div>
          <div className="inventory-box-my-pets">{inventoryItems}</div>
        </div>
        {this.props.usersPets ? (
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
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    usersPets: state.adopt.usersPets,
    usersItems: state.store.usersItems,
    loading: state.adopt.loading,
    specificItems: state.store.specificItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersPets: () => dispatch(actions.fetchUsersPets()),
    fetchUsersItems: () => dispatch(actions.fetchUsersItems()),
    fetchSpecificItems: type => dispatch(actions.fetchSpecificItems(type))
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPets);

export default withNavbar(wrappedComponent);
