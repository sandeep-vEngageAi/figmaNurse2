import React from "react";
import Card from "../../Components/Card/Card";
import Row1 from "../../Components/screen1/S1Row1/Row1";
import Row2 from "../../Components/screen1/S1Row2/Row2";
import alertImgIcon from "../../AllIcons/alertImg.png";
import medicalReport from "../../AllIcons/medicalReport.png";
import electrocardiogramIcon from "../../AllIcons/electrocardiogram.png";
import phoneCallIcon from "../../AllIcons/phone-call.png";
import Header1 from "../../Components/screen1/S1Header1/Header1";
import './Screen1.css'
const Screen1 = () => {
  return (
    <div className="screen1__container">
      <div className="screen1">
        <div className=" screen1__header">
          <Header1 />
        </div>
        <div className="screen1__sidebar">
            
          <Card
            SRC={alertImgIcon}
            name="Patient Alerts"
            BGColor="#3981E9"
            COLOR="#FFFFFF"
            OPACITY="1"
          />
          <Card SRC={medicalReport} name="Cases for Review" />
          <Card SRC={electrocardiogramIcon} name="Monitoring Capsules" />
          <Card SRC={phoneCallIcon} name="Routine Calls" />
        </div>
        <div className="screen1__body">
          <Row1 />
          <Row2 />
          <Row2 />
          <Row2 />
          <Row2 />
          <Row2 />
          <Row2 />
          <Row2 />
        </div>
      </div>
    </div>
  );
};

export default Screen1;
