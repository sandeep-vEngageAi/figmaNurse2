import React, { useState, useEffect } from "react";
import FileUploader from "devextreme-react/file-uploader";
import ProgressBar from "devextreme-react/progress-bar";
import "./DragDrop.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import SelectFiles from "./FileSelection/SelectFiles";
import { connect } from "react-redux";
import { addFiles, filesAdded } from "../../../../Store/action";
import doneS2 from '../../../../AllIcons/doneS2.png';
import { fetchingAgain } from "../../../../Store/action";

const DragDrop = (props) => {
  const [isDropZoneActive, setIsDropZoneActive] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const [textVisible, setTextVisible] = useState(true);
  const [progressVisible, setProgressVisible] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [uploadingToRedux, setUploadingToRedux] = useState(false);

  const [files, setFiles] = useState([]);

  const allowedFileExtensions = [".jpg", ".jpeg", ".gif", ".png", ".txt",".docx"];

  function onDropZoneEnter(e) {
    if (e.dropZoneElement.id === "dropzone-external") {
      setIsDropZoneActive(true);
    }
  }

  function onDropZoneLeave(e) {
    if (e.dropZoneElement.id === "dropzone-external") {
      setIsDropZoneActive(false);
    }
  }

  function onUploaded(e) {
    const file = e.file;
    setImageSource(file);
   

    setTextVisible(false);
    setProgressVisible(false);
    setProgressValue(0);
  }
  
  function onProgress(e) {
    setProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
  }
  
  function onUploadStarted() {
    setImageSource("");
    setProgressVisible(true);
  }
  
  const storeFilesToRedux = () => {
    props.filesAddFunc(imageSource);
    props.filesAddedStatusFunc(true);
    setUploadingToRedux(false);
    setFiles([]);
  };
  const fileUploadedStatusRevertBackToNormal=()=>{
    setImageSource("");
    setTextVisible(true);
    
}
  useEffect(() => {
    if (imageSource) {
      storeFilesToRedux();
    }
  }, [imageSource]);
  let uploadStatus = props.uploadStatus;
  useEffect(() => {
    if(uploadStatus ===true){
      fileUploadedStatusRevertBackToNormal();
      props.uploadStatusToFalseFunc(false)
    }
  }, [uploadStatus]);
  console.log("IMAGE SOURCE", imageSource);
  return (
    <div className="widget-container flex-box">
      {/* <span>Profile Picture</span> */}
      <div
        id="dropzone-external"
        className={`flex-box ${
          isDropZoneActive
            ? "dx-theme-accent-as-border-color dropzone-active"
            : "dx-theme-border-color"
        }`}
      >
        {imageSource && <div><img src ={doneS2} /></div>}
        {textVisible && (
          <div id="dropzone-text" className="flex-box">
            <SelectFiles />
          </div>
        )}
        <ProgressBar
            id="upload-progress"
            min={0}
            max={100}
            width="30%"
            showStatus={false}
            visible={progressVisible}
            value={progressValue}
          ></ProgressBar>
      </div>
      <FileUploader
        id="file-uploader"
        dialogTrigger="#dropzone-external"
        dropZone="#dropzone-external"
        multiple={true}
        allowedFileExtensions={allowedFileExtensions}
        uploadMode="instantly"
        uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        visible={false}
        onDropZoneEnter={onDropZoneEnter}
        onDropZoneLeave={onDropZoneLeave}
        onUploaded={onUploaded}
        onProgress={onProgress}
        onUploadStarted={onUploadStarted}
      ></FileUploader>
    </div>
  );
};
const mapStateToProps = (state) =>{
  return{
    uploadStatus: state.fetchAgain,
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    filesAddFunc: (files) => dispatch(addFiles(files)),
    filesAddedStatusFunc: (status) => dispatch(filesAdded(status)),
    uploadStatusToFalseFunc: () => dispatch(fetchingAgain(false)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DragDrop);
