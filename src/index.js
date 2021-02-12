import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RenderToIndex from "./RenderToIndex";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { Provider } from "react-redux";
import store from "./Store/Store";
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    responseType="id_token token"
    scope="read:current_user update:current_user_metadata"
  >
    <BrowserRouter>
      <Provider store={store}>
        <RenderToIndex />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
