import React from "react";
import "./Screen3Column2.css";
import column2ImageS3 from "../../../AllIcons/column2ImageS3.png";
import { connect } from "react-redux";

const Scree3Column2 = (props) => {
  console.log("IMAGESSHOWING", props.selectedFile);
  return (
    <div className="screen3__column2">
      <div className="screen3__column2__header">
        <p className="screen3__column2__header__text">Patient Details </p>
      </div>
      <div className="screen3__fileArea">
        {props.fileAddStatus && (
          <div
           style={{width:"100%"}}
          >

          <img
            style={{ width:"100%",backgroundColor:"red",objectFit:"contain" }}
            key={props.index + 1000}
            src={window.URL.createObjectURL(props.selectedFile)}
            alt="file"
            />
            </div>
        )} 
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFile: state.files,
    fileAddStatus: state.added,
  };
};

export default connect(mapStateToProps, null)(Scree3Column2);
