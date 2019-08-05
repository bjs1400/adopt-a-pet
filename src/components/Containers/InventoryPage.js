import React, { Component } from "react";
import withNavbar from "../hoc/withNavbar";
import requireAuth from "../hoc/requireAuth";
import { connect } from "react-redux";
import Card from "../Card";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
import Bone from "../../assets/images/bone.jpg";

import * as actions from "../../store/actions/index";

class InventoryPage extends Component {
  componentDidMount() {
    this.props.fetchUsersItems();
    this.props.fetchUsersPets(); 
  }

  state = {
    show: false,
    shownItem: null,
    zindex: null
  };

  useItem = item => {
    this.setState({
      show: true,
      shownItem: item,
      zindex: 105
    });
  };

  cancelHandler = () => {
    this.setState({
      show: false,
      zindex: 40,
      shownItemId: null
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
        case 'empty':
          return (
            <>
            <h1>You have no pets to show!</h1>
            <h2>Visit the <Link to="/adopt">Adoption Center</Link> to start adopting!</h2>
            </> 
          );
        default:
          return (
            <>
              <h1>SELECT A PET BELOW TO USE THIS ITEM ON</h1>
              <div className="grid-container-use-item">
                {this.props.usersPets.map(item => {
                  return (
                    <div className="item-box-use-item">
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={Bone}
                        alt="bone"
                      />
                      <div className="item-name">{item.name}</div>
                    </div>
                  );
                })}
                <div className="pet-box-use-item">
                  <Card imgsrc={Pup} name={this.state.petName} />
                </div>
              </div>
              <Button
                clicked={this.cancelHandler}
                btnClass="ui large red button"
              >
                CANCEL
              </Button>
            </>
          );
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
          {this.state.shownItemId}
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
    fetchUsersItems: () => dispatch(actions.fetchUsersItems())
  };
};

const mapStateToProps = state => {
  return {
    usersItems: state.store.usersItems,
    usersPets: ,
    loading: state.store.loading
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryPage);

export default withNavbar(wrappedComponent);
