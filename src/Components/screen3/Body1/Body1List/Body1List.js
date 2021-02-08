import React from "react";
import CircularIcon from "../../../CircularIcon/CircularIcon";
import keyboardArrowS3 from '../../../../AllIcons/keyboardArrowS3.png'
import './Body1List.css'
const Body1List = (props) => {
  return (
    <div className="screen3__body1__list" style={{backgroundColor:props.ElementBGColor}}>
      <div className="screen3__body1__listElement1">
        <p className="screen3__body1__listElement1__name">CAP LOPRESSOR Clopidogrel Bisulfate </p>
        <p className="screen3__body1__listElement1__quantity">350 mg</p>
      </div>
      <div className="screen3__body1__listElement2">After Breakfast</div>
      <div className="screen3__body1__listElement3">
        <CircularIcon text="D1" alt="D1" BGColor="#A1FF9F" />
        <CircularIcon text="D2" alt="D2" />
        <CircularIcon text="D3" alt="D3" />
        <div className="screen3__body1__listElement3__arrow">
          <img src={keyboardArrowS3} />
        </div>
      </div>
    </div>
  );
};

export default Body1List;
