import React from "react";
import Card from "../../Card";
import Bone from "../../../assets/images/bone.jpg";

const ShowItem = props => {
  return (
    <div className="show-item-box">
      <div class="show-item-container">
        <Card imgsrc={Bone} name={props.itemName} />
        <div className="item-description-box">
          <em>
            <h3>Description:</h3>
          </em>{" "}
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
