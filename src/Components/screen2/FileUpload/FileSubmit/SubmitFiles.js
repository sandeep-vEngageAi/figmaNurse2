import React from "react";
import "./SubmitFiles.css";
import { fileSubmitting } from "../../../../Store/action";
import { connect } from "react-redux";

import imgUpload from "../../../../AllIcons/uploadS2.png";

const SubmitFiles = (props) => {
  return (
    <div className="fileSubmitS2__Container">
      <div
        className="fileSubmitS2__upload"
        onClick={
          props.fileAddedStatus
            ? () => props.fileSubmittingFunc(props.allAddedFiles)
            : () => alert("Please select file")
        }
        disabled={props.fileUploadingStatus}
      >
        <p>
          <img src={imgUpload} />
        </p>
        <p>Upload</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    allAddedFiles: state.files,
    fileAddedStatus: state.added,
    fileUploadingStatus:state.uploading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fileSubmittingFunc: (files) => dispatch(fileSubmitting(files)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitFiles);
