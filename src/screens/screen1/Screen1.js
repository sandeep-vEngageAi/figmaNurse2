import React from "react";
import Card from "../../Components/Card/Card";
import alertImgIcon from "../../AllIcons/alertImg.png";
import medicalReport from "../../AllIcons/medicalReport.png";
import electrocardiogramIcon from "../../AllIcons/electrocardiogram.png";
import phoneCallIcon from "../../AllIcons/phone-call.png";
import Header1 from "../../Components/screen1/HeaderS1/Header1";
import PatientAlerts from "./PatientAlerts/PatientAlerts";
import RoutineCalls from "./RoutineCalls/RoutineCalls";
import MonitoringCapsules from "./MonitoringCapsules/MonitoringCapsules";
import CasesForReview from "./CasesForReview/CasesForReview";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "./Screen1.css";
const Screen1 = ({ match }) => {
  let ScreenRoutes = (
    <Route
      path="/dashboard"
      render={({ match: { url } }) => (
        <>
          <Route
            path={`${url}/PatientAlerts`}
            component={PatientAlerts}
            exact
          />
          <Route path={`${url}/RoutineCalls`} component={RoutineCalls} />
        </>
      )}
    />
  );
  console.log("MATCH SCREEN1", match);
  return (
    <div className="screen1__container">
      <div className="screen1">
        <div className=" screen1__header">
          <Header1 />
        </div>
        <div className="screen1__sidebar">
          <Card SRC={alertImgIcon} name="Patient Alerts" />
          <Card SRC={medicalReport} name="Cases for Review" />
          <Card SRC={electrocardiogramIcon} name="Monitoring Capsules" />
          <Card
            SRC={phoneCallIcon}
            name="Routine Calls"
            BGColor="#3981E9"
            COLOR="#FFFFFF"
            OPACITY="1"
          />
        </div>
        <div className="screen1__body">
          <Screen1Routes />
          {/* <ScreenRoutes /> */}
        </div>
      </div>
    </div>
  );
};

export default Screen1;

let Screen1Routes = (
  <Layout>
    <Switch>
      <Route path="/dashboard/PatientAlerts" component={PatientAlerts} />
      <Route path="/dashboard/RoutineCalls" component={RoutineCalls} />
      <Route
        path="/dashboard/MonitoringCapsules"
        component={MonitoringCapsules}
      />
      <Route path="/dashboard/CasesForReview" component={CasesForReview} />
      <Redirect to="/dashboard/PatientAlerts" />
    </Switch>
  </Layout>
);
