import React from "react";
import telephoneS3 from "../../../AllIcons/telephoneS3.png";
import CircularIcon from '../../../Components/CircularIcon/CircularIcon';
import Body1List from './Body1List/Body1List';
import "./Body1.css";
import CustomButton1 from '../../Buttons/customButton1/CustomButton1';
const Body1 = () => {
  return (
    <div>
      <div className="screen3__body1__header">
        <div className="screen3__body1__header_date">Discharge date</div>
        <div className="screen3__body1__header_approvals">
          <CustomButton1 name="Approve" />
          <CircularIcon imgSrc={telephoneS3} alt="telephone" />
        </div>
      </div>
      <div style={{ height: "64px" }}>
        <div className="screen3__body1__Names">
          <div className="screen3__body1__brandName">
            <p>BRAND NAME</p>
          </div>
          <div className="screen3__body1__medicineTime">MEDICINE TIME</div>
          <div className="screen3__body1__timeline">TIMELINE</div>
        </div>
        <div className="screen3__body1__Names">
          <div className="screen3__body1__dose">(Dosage)</div>
          <div className="screen3__body1__emptySpace"></div>
          <div className="screen3__body1__dates">
            <div className="screen3__body1__date">Aug 1</div>
            <div className="screen3__body1__date">Aug 2</div>
            <div className="screen3__body1__date">Aug 3</div>
          </div>
        </div>
      </div>
      <div className="screen3__body1__lists">
       <Body1List elementBGColor="#F9F7FD" />
       <Body1List elementBGColor="#F9F7FD" />
       <Body1List elementBGColor="#F9F7FD" />
       <Body1List elementBGColor="#F9F7FD" />
      </div>
    </div>
  );
};

export default Body1;
