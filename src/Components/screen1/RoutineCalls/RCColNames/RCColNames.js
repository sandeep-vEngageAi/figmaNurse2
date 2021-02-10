import React from "react";
    
import "./RCColNames.css";

const Row1 = (props) => {
  return (
    <div className="RC__row1">
      <div className="RC__row1__name">PATIENT NAME</div>
      <div className="RC__row1__name">Discharge date</div>
      <div className="RC__row1__name">DISCHARGE DIAGNOSIS</div>
      {/* <div className="RC__row1__name">ALERT</div> */}
      <div className="RC__row1__name">DEPARTMENT</div>
      <div className="RC__row1__status">STATUS</div>
    </div>
  );
};

export default Row1;
