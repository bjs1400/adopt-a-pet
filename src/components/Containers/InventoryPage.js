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
  }

  state = {
    show: false,
    shownItemId: null,
    zindex: null
  };

  viewItem = id => {
    this.setState({
      show: true,
      shownItemId: id,
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
              <div className="item-box-use-item">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={Bone}
                  alt="bone"
                />
                <div className="item-name">{item.name}</div>
              </div>
            );
          });
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
    loading: state.store.loading
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryPage);

export default withNavbar(wrappedComponent);
