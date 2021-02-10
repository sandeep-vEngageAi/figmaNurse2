import React from "react";
import "./CFRRowData.css";
import whatsappIcon from "../../../../AllIcons/whatsappIcon.png";
import aLetterIcon from "../../../../AllIcons/aLetter.png";
const Row2 = (props) => {
let dischargedDate = props.dischargeDate;
if(dischargedDate == "" || dischargedDate ==null || dischargedDate ==undefined){
  dischargedDate = new Date().toString();
}
dischargedDate = new Date(dischargedDate).toString();
dischargedDate = dischargedDate.split(' ');
let dischargedDateRequired = `${dischargedDate[1]} ${dischargedDate[2]}, ${dischargedDate[3]}`
  console.log("DATE-D",dischargedDate);
  console.log("DATE-D",dischargedDateRequired);
 
  return (
    <div className="row2">
      <div className="row2_cell1">{props.name}</div>
      <div className="row2__cell2">{dischargedDateRequired}</div>
      <div className="row2__cell2">{props.dischargeDiagnosis}</div>
     { props.alertComponent && (<div className="row2__wrapper__cell4">
        <div className="row2__cell4">
          <p className="row2__cell4__text">Bleeding</p>
        </div>
      </div>)}
      <div className="row2__cell2">{props.department}</div>

      <div className="row2__cell5">
        <p className="row2__cell5_1">
          <img src={whatsappIcon} />
        </p>
        <p className="row2__cell5_2">
          <img src={aLetterIcon} />
        </p>
      </div>
    </div>
  );
};

export default Row2;
