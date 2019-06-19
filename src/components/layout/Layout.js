import React, { Fragment } from "react";
import Toolbar from "../Navigation/Toolbar/toolbar";

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      {props.children}
    </Fragment>
  );
};

export default Layout;
