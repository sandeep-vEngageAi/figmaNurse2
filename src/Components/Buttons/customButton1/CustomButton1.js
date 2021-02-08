import React from "react";
import './CustomButton1.css';
const CustomButton = (props) => {
  return (
      <div className="customButton" style={{borderColor:props.BRDRColor}}>
        <p className="customButtonText">{props.name}</p>
      </div>
  );
};

export default CustomButton;
