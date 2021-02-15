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
import { BrowserRouter, NavLink } from "react-router-dom";
import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem";

import "./Screen1.css";
const Screen1 = (props) => {
  return (
    <div className="screen1__container">
      <div className="screen1">
        <div className=" screen1__header">
          <Header1 />
        </div>
        <div className="screen1__sidebar">
          <NavLink to="/dashboard/PatientAlerts">
            <Card SRC={alertImgIcon} name="Patient Alerts" />
          </NavLink>
          <NavLink to="/dashboard/CasesForReview">
            <Card SRC={medicalReport} name="Cases for Review" />
          </NavLink>
          
          <NavLink to="/dashboard/MonitoringCapsules">
          <Card SRC={electrocardiogramIcon} name="Monitoring Capsules" />
          </NavLink>

          <NavLink to="/dashboard/RoutineCalls">
          <Card
            SRC={phoneCallIcon}
            name="Routine Calls"
            // BGColor="#3981E9"
            // COLOR="#FFFFFF"
            OPACITY="1"
            />
            </NavLink>
        </div>
        <div className="screen1__body">
          <Route path="/dashboard/PatientAlerts" component={PatientAlerts} />
          <Route path="/dashboard/CasesForReview" component={CasesForReview} />
          <Route path="/dashboard/MonitoringCapsules" component={MonitoringCapsules} />
          <Route path="/dashboard/RoutineCalls" component={RoutineCalls} />
           <Redirect to="/dashboard/RoutineCalls" />
          {/* <RoutineCalls /> */}
        </div>
      </div>
    </div>
  );
};

export default Screen1;
