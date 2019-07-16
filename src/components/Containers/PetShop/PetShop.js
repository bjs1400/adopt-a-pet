import React, { Component } from "react";
import { connect } from "react-redux";
import withNavbar from "../../hoc/withNavbar";
import Card from "../../Card";
import Bone from "../../../assets/images/bone.jpg";
import Modal from "../../UI/Modal/Modal";
import ShowItem from "./ShowItem";
import Spinner from "../../UI/Spinner/Spinner";

import * as actions from "../../../store/actions/index";

class PetShop extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  state = {
    show: false,
    shownItemId: null, // id
    zindex: 40
    // items: [
    //   {
    //     name: "Frisbee",
    //     cost: 80,
    //     type: "toy",
    //     description:
    //       "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah I'm"
    //   },
    //   {
    //     name: "Bouncy Ball",
    //     cost: 60,
    //     type: "toy",
    //     description:
    //       "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah"
    //   },
    //   {
    //     name: "Pacifier",
    //     cost: 100,
    //     type: "toy",
    //     description:
    //       "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah"
    //   },
    //   {
    //     name: "Lollipop",
    //     cost: 40,
    //     type: "food",
    //     description:
    //       "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah"
    //   },
    //   {
    //     name: "Brocolli",
    //     cost: 20,
    //     type: "food",
    //     description:
    //       "your pup will love this cute toy. i can deal with the bad nights when"
    //   },
    //   {
    //     name: "Bacon Strips",
    //     cost: 120,
    //     type: "food",
    //     description:
    //       "your pup will love this cute toy. i can deal with the bad nights when"
    //   }
    // ]
  };

  showItem = id => {
    this.props.fetchItem(id);
    this.setState({
      show: true,
      shownItemId: id,
      zindex: 105
    });
  };
  cancelHandler = () => {
    this.setState({ loading: true });
    this.setState({
      show: false,
      zindex: 40
    });
  };

  purchaseHandler = () => {
    this.props.purchaseItem(this.state.shownItemId); // item.id
  };

  render() {
    let showItem = this.props.loading ? (
      <Spinner />
    ) : (
      <ShowItem
        price={this.props.item.price}
        itemName={this.props.item.name}
        description={this.props.item.description}
        purchase={this.purchaseHandler}
      />
    );

    var itemsForSale = this.props.items ? (
      this.props.items.map(item => (
        <div key={item.id} className="shop-item">
          <Card
            btnClicked={() => this.showItem(item.id)}
            btnContent="View More"
            btnClass="ui primary button"
            imgsrc={Bone}
            name={item.name}
            description={`${item.price} tokens`}
          />
        </div>
      ))
    ) : (
      <>
        <Spinner />
        <Spinner />
        <Spinner />
      </>
    );

    return (
      <>
        <Modal
          show={this.state.show}
          modalClosed={this.cancelHandler}
          zindex={this.state.zindex}
        >
          {showItem}
        </Modal>
        <h1>PET SHOP</h1>
        Welcome to the Pet Shop! Here, you can buy toys and food for your pet to
        keep them happy!
        <div className="shop-container">{itemsForSale}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.store.loading,
    items: state.store.storeInventory,
    item: state.store.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(actions.fetchInventory()),
    fetchItem: id => dispatch(actions.fetchItem(id)),
    purchaseItem: id => dispatch(actions.purchaseItem(id))
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShop);

export default withNavbar(wrappedComponent);
