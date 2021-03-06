import React from "react";
    
import "./MCColNames.css";

const Row1 = (props) => {
  return (
    <div className="row1">
      <div className="row1__name">PATIENT NAME</div>
      <div className="row1__name">Discharge date</div>
      <div className="row1__name">DISCHARGE DIAGNOSIS</div>
      <div className="row1__name">DEPARTMENT</div>
      <div className="row1__status">TIME SINCE DISCHARGE</div>
    </div>
  );
};

export default Row1;
