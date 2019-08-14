import React, { Component } from "react";
import withNavbar from "../hoc/withNavbar";
import requireAuth from "../hoc/requireAuth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../Card";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button";
import Modal from "../UI/Modal/Modal";
import Bone from "../../assets/images/bone.jpg";
import Pup from "../../assets/images/pup.jpg";

import * as actions from "../../store/actions/index";

class InventoryPage extends Component {
  componentDidMount() {
    this.props.fetchUsersItems();
    this.props.fetchUsersPets();
  }

  state = {
    show: false,
    shownItem: null,
    zindex: -1
  };

  showItem = item => {
    this.setState({
      show: true,
      shownItem: { ...item },
      zindex: 500
    });
  };

  cancelHandler = () => {
    this.setState({
      show: false,
      zindex: -1,
      shownItem: null
    });
  };

  useItemOnPet = (itemId, petId, name, type) => {
    let res = window.confirm(`Are you sure you want to use this item on ${name}?`); 

    if (res) {
      //use item on pet
      this.props.useItemOnPet(itemId, petId, type);
      alert("You used this item!");
    }
    this.cancelHandler();
    };

  render() {
    let items = () => {
      switch (this.props.usersItems) {
        case "loading":
          return (
            <>
              <Spinner />
              <Spinner />
              <Spinner />
            </>
          );
        case "empty":
          return "No items to show";
        default:
          return this.props.usersItems.map(item => {
            return (
              <Card
                btnClass="ui primary button"
                btnContent="Use"
                imgsrc={Bone}
                name={item.name}
                classes={{ width: "60%" }}
                btnClicked={() => this.showItem({ ...item })}
              />
            );
          });
      }
    };

    let useItem = () => {
      switch (this.props.usersPets) {
        case "loading":
          return <Spinner />;
        case "empty":
          return (
            <>
              <h1>You have no pets to show!</h1>
              <h2>
                Visit the <Link to="/adopt">Adoption Center</Link> to start
                adopting!
              </h2>
            </>
          );
        default:
          return this.state.shownItem ? (
            <>
              <h1>SELECT A PET BELOW TO USE THIS ITEM ON</h1>
              <div className="grid-container-use-item">
                {this.props.usersPets.map(pet => {
                  return (
                    <div
                      onClick={() =>
                        this.useItemOnPet(
                          this.state.shownItem.id,
                          pet.id,
                          pet.name,
                          this.state.shownItem.type
                        )
                      }
                      className="item-box-use-item"
                    >
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={pet.imgsrc}
                        alt="Pup"
                      />
                      <div className="item-name">{pet.name}</div>
                    </div>
                  );
                })}
                <div className="pet-box-use-item">
                  <Card imgsrc={Bone} name={this.state.shownItem.name} />
                </div>
              </div>
              <Button
                clicked={this.cancelHandler}
                btnClass="ui large red button"
              >
                CANCEL
              </Button>
            </>
          ) : null;
      }
    };

    return (
      <>
        <h1>My Items</h1>
        <Modal
          show={this.state.show}
          modalClosed={this.cancelHandler}
          zindex={this.state.zindex}
        >
          {useItem()}
        </Modal>
        <div style={{ marginTop: "5%" }} className="shop-container">
          {items()}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersItems: () => dispatch(actions.fetchUsersItems()),
    fetchUsersPets: () => dispatch(actions.fetchUsersPets()),
    useItemOnPet: (itemId, petId, type) => dispatch(actions.useItemOnPet(itemId, petId, type))
  };
};

const mapStateToProps = state => {
  return {
    usersItems: state.store.usersItems,
    usersPets: state.adopt.usersPets,
    loading: state.store.loading
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryPage);

export default requireAuth(withNavbar(wrappedComponent));
