import React from "react";
import Row1 from '../../../Components/screen1/S1Row1/Row1';
import Row2 from '../../../Components/screen1/S1Row2/Row2';
const PatientAlerts = (props) => {
  return (
    <div>
      <Row1 />
      <Row2
       name=""
       dischargeData=""
       dischargeDiagnosis=""
       alert=""
       status="" />
      <Row2 />
      <Row2 />
      <Row2 />
      <Row2 />
    </div>
  );
};

export default PatientAlerts;
