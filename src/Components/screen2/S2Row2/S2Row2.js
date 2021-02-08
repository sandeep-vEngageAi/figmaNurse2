import React from "react";
import "./S2Row2.css";
import mobilephoneS2 from "../../../AllIcons/mobilephoneS2.png";
import aLetterIcon from "../../../AllIcons/aLetter.png";
import verifyS2  from '../../../AllIcons/verifyS2.png'
const Row2 = () => {
  return (
    <div className="row2">
      <div className="row2_cell1">
        <p>Sahil Karia</p>
        <p className="row2__dob">July 19,1992</p>
      </div>
      <div className="row2__cell2">MPR27Q</div>
      <div className="row2__cell2">ABCDE9629</div>
      <div className="row2__cell2">ORDER INITIATED</div>
      <div className="row2__cell5">
        <p className="row2__cell5_1">
          <img src={mobilephoneS2} />
        </p>
        <p className="row2__cell5_1">
          <img src={verifyS2} />
        </p>
      </div>
    </div>
  );
};

export default Row2;
