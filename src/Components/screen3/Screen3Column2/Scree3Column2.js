import React from "react";
import './Screen3Column2.css'
import column2ImageS3 from '../../../AllIcons/column2ImageS3.png'
const Scree3Column2 = () => {
  return (
      <div className="screen3__column2">
        <div className="screen3__column2__header">
        <p className="screen3__column2__header__text">Patient Details </p>
         </div>
        <div className="screen3__fileArea" 
        style={{backgroundImage: `url(${column2ImageS3})`}}>
        </div>
    </div>
  );
};

export default Scree3Column2;
