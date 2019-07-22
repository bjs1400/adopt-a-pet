import React, { Component } from "react";
import withNavbar from "../hoc/withNavbar";
import requireAuth from "../hoc/requireAuth";
import { connect } from "react-redux";
import Card from "../Card";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";

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
    let items = this.props.loading
      ? () => {
          return (
            <>
              <Spinner />
              <Spinner />
              <Spinner />
            </>
          );
        }
      : () => {
          if (!this.props.usersItems) {
            return <h1>No Items Found</h1>;
          } else {
            return this.props.usersItems.map(item => (
              <Card
                key={item.id}
                btnContent="Use"
                btnClass="ui primary button"
                description={item.description}
                name={item.name}
                btnClicked={() => this.viewItem(item.id)}
              />
            ));
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

export default requireAuth(withNavbar(wrappedComponent));
