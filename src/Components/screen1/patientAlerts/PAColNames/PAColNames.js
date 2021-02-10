import React from "react";
    
import "./PAColNames.css";

const Row1 = (props) => {
  return (
    <div className="PA__row1">
      <div className="PA__row1__name">PATIENT NAME</div>
      <div className="PA__row1__name">Discharge date</div>
      <div className="PA__row1__name">DISCHARGE DIAGNOSIS</div>
      <div className="PA__row1__name">ALERT</div>
      <div className="PA__row1__status">STATUS</div>
    </div>
  );
};

export default Row1;
