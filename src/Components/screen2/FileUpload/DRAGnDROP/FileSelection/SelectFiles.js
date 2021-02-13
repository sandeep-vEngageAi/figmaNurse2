import React from "react";
import addfiles from "../../../../../AllIcons/addFilesS2.png";
import swipeS2 from "../../../../../AllIcons/swipeS2.png";

import "./SelectFiles.css";
const SelectFiles = (props) => {
 
  return (
    <div className="fileSelectS2__container ">
      <div className="fileSelectS2_heading">Upload Discharge Summary</div>
      <div className="fileSelectS2_addfiles" >
        <img src={addfiles} />
      </div>
      <div className="fileSelectS2_chooseFile">
        <p>Choose a file or drag it here</p>
        <p>
          <img src={swipeS2} />
        </p>
      </div>

      <div>
       
      </div>
    </div>
  );
};


export default (SelectFiles);
