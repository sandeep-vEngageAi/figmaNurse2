import React from "react";
import "./Body2.css";
import mdiCloseS3 from "../../../../AllIcons/mdiCloseS3.png";
import CircularIcon from "../../../CircularIcon/CircularIcon";
import CustomButton1 from '../../../Buttons/customButton1/CustomButton1'
const Body2 = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <div className="screen3__body2__header">
        <div className="screen3__body2__header_name">Discharge date</div>
        <div className="screen3__body2__header_cancel">
          <CircularIcon imgSrc={mdiCloseS3} alt="telephone" />
        </div>
      </div>
      <div className="screen3__body2__horizontalLine1"></div>
      <div className="screen3__body2__choices">
        <div className="screen3__body2__name">name</div>
        <div className="screen3__body2__brandName">CAP ARRENO Asprin</div>
        <div className="screen3__body2__buttons">
         <div className="screen3__body2__substituteButton">
           <CustomButton1  name="Substitute"/>
           </div>
         <CustomButton1  name ="Delete" BRDRColor="rgba(255, 109, 109, 0.68)"/>
        </div>
      </div>
      <div className="screen3__body2__horizontalLine2"></div>
      <div className="screen3__body__filter">
        <div>Medication Timeline</div>
        <div></div>
        <div>August</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Body2;
