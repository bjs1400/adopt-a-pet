import React, { Component } from "react";
import Card from "../../Card";
import Bone from "../../../assets/images/bone.jpg";
import Modal from "../../UI/Modal/Modal";
import ShowItem from "./ShowItem";

class PetShop extends Component {
  state = {
    show: false,
    shownItemId: null, // id property
    items: [
      {
        name: "Frisbee",
        cost: 80,
        type: "toy",
        description:
          "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah I'm"
      },
      {
        name: "Bouncy Ball",
        cost: 60,
        type: "toy",
        description:
          "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah"
      },
      {
        name: "Pacifier",
        cost: 100,
        type: "toy",
        description:
          "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah"
      },
      {
        name: "Lollipop",
        cost: 40,
        type: "food",
        description:
          "your pup will love this cute toy. i can deal with the bad nights when im with my baby yeah lorem ipsum dolar when im with my baby yeah"
      },
      {
        name: "Brocolli",
        cost: 20,
        type: "food",
        description:
          "your pup will love this cute toy. i can deal with the bad nights when"
      },
      {
        name: "Bacon Strips",
        cost: 120,
        type: "food",
        description:
          "your pup will love this cute toy. i can deal with the bad nights when"
      }
    ]
  };

  showItem = id => {
    this.setState({
      show: true,
      shownItemId: id
    });
  };
  cancelHandler = () => {
    this.setState({
      show: false
    });
  };

  render() {
    let itemsForSale = this.state.items.map(item => (
      <div className="shop-item">
        <Card
          btnClicked={() => this.showItem(item.id)}
          btnContent="View More"
          btnClass="ui primary button"
          imgsrc={Bone}
          name="Bone"
          description={`${item.cost} tokens`}
        />
      </div>
    ));
    return (
      <>
        <Modal show={this.state.show} modalClosed={this.cancelHandler}>
          <ShowItem
            itemName="Bone"
            description={this.state.items[0].description}
          />
        </Modal>
        <h1>PET SHOP</h1>
        Welcome to the Pet Shop! Here, you can buy toys and food for your pet to
        keep them happy!
        <div className="shop-container">{itemsForSale}</div>
      </>
    );
  }
}

export default PetShop;
