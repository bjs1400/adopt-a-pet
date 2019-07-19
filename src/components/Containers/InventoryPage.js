import React, { Component } from "react";
import withNavbar from "../hoc/withNavbar";
import requireAuth from "../hoc/requireAuth";
import { connect } from "react-redux";
import Card from "../Card";
import Spinner from "../UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";

class InventoryPage extends Component {
  componentDidMount() {
    this.props.fetchUsersItems();
  }
  render() {
    let items = this.props.loading ? (
      <>
        <Spinner />
        <Spinner />
        <Spinner />
      </>
    ) : (
      () => {
        if (this.props.noItemsFound) {
          return <h1>No Items Found</h1>;
        } else {
          return this.props.usersItems.map(item => (
            <Card
              key={item.id}
              btnContent="View More"
              btnClass="ui primary button"
              description={item.description}
              name={item.name}
            />
          ));
        }
      }
    );
    return (
      <div style={{ marginTop: "5%" }} className="shop-container">
        {items}
      </div>
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
