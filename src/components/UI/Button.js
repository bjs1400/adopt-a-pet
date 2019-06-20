import React, { useState } from "react";

const Button = props => (
  <button className={`${props.btnclass}`} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
