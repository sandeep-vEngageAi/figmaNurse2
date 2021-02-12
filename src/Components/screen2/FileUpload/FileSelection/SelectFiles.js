import React, { useState, useEffect } from "react";
import { filesAdded, addFiles } from "../../../../Store/action";
import addfiles from "../../../../AllIcons/addFilesS2.png";
import swipeS2 from "../../../../AllIcons/swipeS2.png";

import { connect } from "react-redux";
import "./SelectFiles.css";
const SelectFiles = (props) => {
  const [fileInput, setFileInput] = useState([]);
  const [files, setFiles] = useState([]);
  const [uploadingToRedux, setUploadingToRedux] = useState(false);

  const captureHandler = (e) => {
    const uploadedFile = Array.from(e.target.files);
    setFiles((currentFile) => [...currentFile, uploadedFile]);
    setFiles(uploadedFile);
    setUploadingToRedux(true);
  };
  const storeFilesToRedux = () => {
    console.log("FILES", files);
    props.filesAddFunc(files[0]);
    props.filesAddedStatusFunc(true);
    setUploadingToRedux(false);
    setFiles([]);
  };

  useEffect(() => {
    if (files.length !== 0 && uploadingToRedux) {
      storeFilesToRedux();
    }
  }, [uploadingToRedux]);
  return (
    <div className="fileSelectS2__container ">
      <div className="fileSelectS2_heading">Upload Discharge Summary</div>
      <div className="fileSelectS2_addfiles" onClick={() => fileInput.click()}>
        <img src={addfiles} />
      </div>
      <div className="fileSelectS2_chooseFile">
        <p>Choose a file or drag it here</p>
        <p>
          <img src={swipeS2} />
        </p>
      </div>

      <div>
        <input
          ref={(fileInputRef) => setFileInput(fileInputRef)}
          onChange={captureHandler}
          onChange={(event) => {
            captureHandler(event);
          }}
          onClick={(event) => {
            event.target.value = null;
          }}
          accept=".txt,.pdf,.docx"
          type="file"
          // multiple
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filesAddFunc: (files) => dispatch(addFiles(files)),
    filesAddedStatusFunc: (status) => dispatch(filesAdded(status)),
  };
};

export default connect(null, mapDispatchToProps)(SelectFiles);
