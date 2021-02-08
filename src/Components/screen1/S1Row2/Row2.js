import React from "react";
import "./Row2.css";
import whatsappIcon from '../../../AllIcons/whatsappIcon.png'
import aLetterIcon from '../../../AllIcons/aLetter.png'

const Row2 = () => {
  return (
    <div className="row2">
      <div className="row2_cell1">Sahil Karia</div>
      <div className="row2__cell2">July 19,2020</div>
      <div className="row2__cell2">Post Cholecystectomy</div>
      <div className="row2__cell4">
        <p className="row2__cell4__text">Bleeding</p>
      </div>
      <div className="row2__cell5">
          <p className="row2__cell5_1">
            <img src={whatsappIcon} />
          </p>
          <p className="row2__cell5_1">
            <img src={aLetterIcon} />
          </p>
      </div>
    </div>
  );
};

export default Row2;
