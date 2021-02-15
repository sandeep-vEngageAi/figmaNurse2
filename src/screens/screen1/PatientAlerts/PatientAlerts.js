import React from "react";
import Row1 from '../../../Components/screen1/patientAlerts/PAColNames/PAColNames'
import Row2 from '../../../Components/screen1/patientAlerts/PARowData/PARowData'
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
