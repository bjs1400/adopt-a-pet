import React, { useState } from "react";

const Button = props => (
  <button className={`${props.btnClass}`} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
