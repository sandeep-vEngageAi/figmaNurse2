import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import LogoutButton from "../../Authentication/LogoutButton";
const navigationItems = (props) => (
  <div className="vEngageLogoNavigation">
    <div>
      <img
        style={{ width: "70px", objectFit: "contain" }}
        src="https://lh3.googleusercontent.com/P5HdyDEA_1W5PJ3d12bO7Qyks7hITUNl_joUu31atU48sDGm7UyFnPfEbXr1CxLsJG4H=s104"
      />
    </div>
    <div className="NavigationItems">
      <NavigationItem link="/" exact>
        Dashboard
      </NavigationItem>
      <NavigationItem link="/ds-upload">File Upload</NavigationItem>
      <NavigationItem link="/monitoring-capsule" exact>
        monitoring Capsule
      </NavigationItem>
      <LogoutButton />
    </div>
  </div>
);

export default navigationItems;

// {!props.isAuthenticated
//     ? <NavigationItem link="/auth">Authenticate</NavigationItem>
//     : <NavigationItem link="/logout">Logout</NavigationItem>}
