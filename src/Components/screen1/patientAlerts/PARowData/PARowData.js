import React from "react";
import "./PARowData.css";
import whatsappIcon from "../../../../AllIcons/whatsappIcon.png";
import {stringToDateFunc} from '../../../../HighOrderFunctions/stringToDateFunc';

import aLetterIcon from "../../../../AllIcons/aLetter.png";
const Row2 = (props) => {
 
  return (
    <div className="PA__row2">
      <div className="PA__row2_cell1">{props.name}</div>
      <div className="PA__row2__cell2">{stringToDateFunc(props.dischargeDate)}</div>
      <div className="PA__row2__cell2">{props.dischargeDiagnosis}</div>
      <div className="PA__row2__wrapper__cell4">
        <div className="PA__row2__cell4">
          <p className="PA__row2__cell4__text">{props.alertName}</p>
        </div>
      </div>

      <div className="PA__row2__cell5">
        <p className="PA__row2__cell5_1">
          <img src={whatsappIcon} />
        </p>
        <p className="PA__row2__cell5_2">
          <img src={aLetterIcon} />
        </p>
      </div>
    </div>
  );
};

export default Row2;
