import React from "react";
import "./S2Row2.css";
import mobilephoneS2 from "../../../AllIcons/mobilephoneS2.png";
import verifyS2  from '../../../AllIcons/verifyS2.png'
const Row2 = (props) => {
 
  return (
    <div className="row2">
      <div className="S2row2__cell1">
        <p>{props.name}</p>
        <p className="S2row2__dob">{`${props.age}`}</p>
      </div>
      <div className="S2row2__cell2">{props.QRCode}</div>
      <div className="S2row2__cell2">{props.hospitalID}</div>
      <div className="S2row2__cell2">{props.dischargeStatus}</div>
      <div className="S2row2__cell5">
        <p className="S2row2__cell5_1">
          <img src={mobilephoneS2} />
        </p>
        <p className="S2row2__cell5_1">
          <img src={verifyS2} />
        </p>
      </div>
    </div>
  );
};

export default Row2;
