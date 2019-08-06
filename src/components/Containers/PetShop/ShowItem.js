import React from "react";
import Card from "../../Card";
import Bone from "../../../assets/images/bone.jpg";
import Button from "../../UI/Button";

const ShowItem = props => {
  return (
    <div className="show-item-box">
      <div className="show-item-container">
        <Card imgsrc={Bone} name={props.itemName} />
        <div className="item-description-box">
          <div className="item-main-content">
            <em>
              <h3>Description:</h3>
            </em>{" "}
            {props.description}
          </div>
          <div className="item-cost-box">{props.price} Tokens</div>
        </div>
        <div class="si-btn-container">
          <Button
            clicked={props.purchase}
            btnClass="ui green button buy-item-btn"
          >
            BUY NOW
          </Button>
          <Button
            clicked={props.cancel}
            btnClass="ui red button cancel-item-btn"
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
