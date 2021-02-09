import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import App from "./App";
import Login from "./Authentication/Login";
import LoaderBar from "./Loader/LoaderBar";
import CardForLogin from "./Components/CardForLogin/CardForLogin";
const RenderToIndex = () => {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardForLogin>
          <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
            <LoaderBar />
            <div>Please wait..</div>
          </div>
        </CardForLogin>
      </div>
    );
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <App />
      </div>
    );
  } else {
    return (
      <div style={{ height: "100vh", width: "100v" }}>
        <Login />
      </div>
    );
  }
};

export default RenderToIndex;
