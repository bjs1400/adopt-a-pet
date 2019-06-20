import React, { Component } from "react";
import Card from "../../Card";
import Bone from "../../../assets/images/bone.jpg";

class PetShop extends Component {
  state = {
    items: [
      {
        name: "Frisbee",
        cost: 80,
        type: "toy"
      },
      {
        name: "Bouncy Ball",
        cost: 60,
        type: "toy"
      },
      {
        name: "Pacifier",
        cost: 100,
        type: "toy"
      },
      {
        name: "Lollipop",
        cost: 40,
        type: "food"
      },
      {
        name: "Brocolli",
        cost: 20,
        type: "food"
      },
      {
        name: "Bacon Strips",
        cost: 120,
        type: "food"
      }
    ]
  };
  render() {
    let itemsForSale = this.state.items.map(item => (
      <div className="shop-item">
        <Card btnContent="View More" btnClass="ui primary button" imgsrc={Bone} name="Bone" description={`${item.cost} tokens`} />
      </div>
    ));
    return (
      <>
        <h1>PET SHOP</h1>
        <div className="shop-container">{itemsForSale}</div>
      </>
    );
  }
}

export default PetShop;
