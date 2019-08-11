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
    console.log(this.props.items);
  }

  state = {
    show: false,
    shownItem: null, // id
    zindex: -1
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

  showItem = item => {
    // item is an object
    this.setState({
      show: true,
      shownItem: item,
      zindex: 500
    });
  };

  cancelHandler = () => {
    this.setState({ loading: true });
    this.setState({
      show: false,
      zindex: -1
    });
  };

  purchaseHandler = () => {
    let res = window.confirm("Are you sure you want to purchase this item?");
    if (res) {
      this.props.purchaseItem(
        this.state.shownItem.id,
        this.state.shownItem.price
      ); // item.id
    }
    this.cancelHandler();
  };

  render() {
    // let showItem = () => {
    //   console.log(this.props.itemFetched);
    //   switch (this.props.itemFetched) {
    //     case "itemFound":
    //       return (
    //         <ShowItem
    //           price={this.props.item.price}
    //           itemName={this.props.item.name}
    //           description={this.props.item.description}
    //           purchase={this.purchaseHandler}
    //           cancel={this.cancelHandler}
    //         />
    //       );
    //     case null:
    //       return null;
    //     case "loading":
    //       return <Spinner />;
    //     default:
    //       return null;
    //   }
    // };
    // console.log(showItem);
    let displayItem = this.state.shownItem ? (
      <ShowItem
        price={this.state.shownItem.price}
        itemName={this.state.shownItem.name}
        description={this.state.shownItem.description}
        purchase={this.purchaseHandler}
        cancel={this.cancelHandler}
      />
    ) : (
      <Spinner />
    );

    let itemsForSale = this.props.items ? (
      this.props.items.map(item => (
        <div key={item.id} className="shop-item">
          <Card
            btnClicked={() => this.showItem({ ...item })}
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
          {displayItem}
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
    item: state.store.item,
    itemFetched: state.store.itemFetched
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(actions.fetchInventory()),
    fetchItem: id => dispatch(actions.fetchItem(id)),
    purchaseItem: (id, price) => dispatch(actions.purchaseItem(id, price))
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShop);

export default withNavbar(wrappedComponent);
