import React, { Component } from "react";
import withNavbar from "../hoc/withNavbar";
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

  useItem = item => {
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
                btnClicked={() => this.useItem({ ...item })}
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
                    <div className="item-box-use-item">
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={Pup}
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
    fetchUsersPets: () => dispatch(actions.fetchUsersPets())
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

export default withNavbar(wrappedComponent);
