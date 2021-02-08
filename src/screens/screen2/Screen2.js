import React from "react";
import Row1 from "../../Components/screen2/S2Row1/S2Row1";
import Row2 from "../../Components/screen2/S2Row2/S2Row2";
import Header1 from "../../Components/screen2/S2Header1/Header";
import addfiles from '../../AllIcons/addFilesS2.png'
import swipeS2 from '../../AllIcons/swipeS2.png';
import imgUpload from '../../AllIcons/uploadS2.png';
import './Screen2.css';
const Screen2 = () => {
  return (
    <div>
      <div className=" s2_container">
        <div className="app">
          <div className=" header">
            <Header1 />
          </div>
          <div className=" body">
            <Row1 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
          </div>
          <div className="sidebarS2">
            <div className="sidebarS2__heading">
              Upload Discharge Summary
            </div>
            <div className="sidebarS2__addfiles" >
              <img src ={addfiles} />
            </div>
            <div className="sidebarS2__chooseFile" >
              <p>Choose a file or drag it here</p>
              <p>
              <img src ={swipeS2} />
              </p>
            </div>
            <div className="sidebarS2__upload" >
              <p><img src ={imgUpload} /></p>
              <p>Upload</p>
           
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Screen2;
