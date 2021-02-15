import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import LogoutButton from "../../Authentication/LogoutButton";
import VEngageLogoFile from "./vEngageLogoFile";
// import { useAuth0 } from "@auth0/auth0-react";
const navigationItems = (props) => {
  // const { isAuthenticated } = useAuth0();
  return (
    <div className="vEngageLogoNavigation">
      <div>
        <VEngageLogoFile />
      </div>
      <div className="NavigationItems">
        <NavigationItem link="/" exact>
          Dashboard
        </NavigationItem>
        <NavigationItem link="/ds-upload">File Upload</NavigationItem>
        {/* <NavigationItem link="/monitoring-capsule/:id" exact>
          monitoring Capsule
        </NavigationItem> */}
        <LogoutButton />
      </div>
    </div>
  );
};

export default navigationItems;

// {!props.isAuthenticated
//     ? <NavigationItem link="/auth">Authenticate</NavigationItem>
//     : <NavigationItem link="/logout">Logout</NavigationItem>}
