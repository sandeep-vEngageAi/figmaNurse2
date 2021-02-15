import "./App.css";
import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Screen1 from "./screens/screen1/Screen1";
import Screen2 from "./screens/screen2/Screen2";
import Screen3 from "./screens/screen3/Screen3";
import Screen4 from "./screens/screen4/Screen4";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationItems from "./Navigation/NavigationItems/NavigationItems";
function App() {
  const { isAuthenticated } = useAuth0();
  let routes = null;
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/ds-upload" component={Screen2} />
        <Route path="/monitoring-capsule/:id" component={Screen3} />
        <Route path="/dashboard" component={Screen1} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }

  return (
    <div className="app__container">
      <div className="vEngageNavbar">
        <NavigationItems />
      </div>
      <div className="app__body__content">
        {routes}
        </div>
    </div>
  );
}

export default App;
