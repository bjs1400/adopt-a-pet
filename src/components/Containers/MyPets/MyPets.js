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

import * as actions from "../../../store/actions/index";

class MyPets extends Component {
  componentDidMount() {
    this.props.fetchUsersPets();
    this.props.fetchUsersItems();
    this.fetchRandomQuote();
  }
  state = {
    show: false,
    zindex: 40,
    quote: "Quote"
  };

  cancelHandler = () => {
    this.setState({
      show: false,
      zindex: 40
    });
  };

  useItem = (petId, type) => {
    this.props.fetchSpecificItems(petId, type);
    this.setState({
      show: true,
      zindex: 105
    });
  };

  fetchRandomQuote = () => {};

  render() {
    let myPets = this.props.loading
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
                  play={() => this.useItem(pet.id, "play")}
                  feed={() => this.useItem(pet.id, "feed")}
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

    return (
      <>
        <h1>MY TRIBE</h1>
        <Modal
          zindex={this.state.zindex}
          show={this.state.show}
          modalClosed={this.cancelHandler}
        >
          {useItem}
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
    loading: state.adopt.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersPets: () => dispatch(actions.fetchUsersPets()),
    fetchUsersItems: () => dispatch(actions.fetchUsersItems())
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPets);

export default withNavbar(wrappedComponent);
