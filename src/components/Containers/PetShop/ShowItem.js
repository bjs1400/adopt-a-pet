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
          <div className="item-cost-box">85 Tokens</div>
          <div>
            <div />
            <Button btnClass="ui green button buy-item-btn">BUY NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
