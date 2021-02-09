import React from "react";
import { NavLink } from "react-router-dom";
import Button from "devextreme-react/button";

import classes from "./NavigationItem.css";

const navigationItem = (props) => (
  <div style={{ marginRight: "10px" }}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      <Button width={200} height={40} text="Logout" type="success">
        {props.children}
      </Button>
    </NavLink>
  </div>
);

export default navigationItem;
