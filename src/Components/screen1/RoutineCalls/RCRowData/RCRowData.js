import React from "react";
import "./RCRowData.css";
import {stringToDateFunc} from '../../../../HighOrderFunctions/stringToDateFunc';
import whatsappIcon from "../../../../AllIcons/whatsappIcon.png";
import aLetterIcon from "../../../../AllIcons/aLetter.png"
const Row2 = (props) => {

  return (
    <div className="RC__row2">
      <div className="RC__row2_cell1">{props.name}</div>
      <div className="RC__row2__cell2">{stringToDateFunc(props.dischargeDate)}</div>
      <div className="RC__row2__cell2">{props.dischargeDiagnosis}</div>
   
      <div className="RC__row2__cell2">{props.department}</div>

      <div className="RC__row2__cell5">
        <p className="RC__row2__cell5_1">
          <img src={whatsappIcon} />
        </p>
        <p className="RC__row2__cell5_2">
          <img src={aLetterIcon} />
        </p>
      </div>
    </div>
  );
};

export default Row2;
