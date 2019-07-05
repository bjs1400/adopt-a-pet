import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  const { zindex } = props;
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          zIndex: zindex,
          transform: props.show ? "translateY(0)" : "translateY(-100)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
