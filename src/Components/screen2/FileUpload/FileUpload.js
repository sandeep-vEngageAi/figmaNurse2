import React from "react";
import SubmitFiles from "./FileSubmit/SubmitFiles";
import DragDrop from './DRAGnDROP/DragDrop';
import "./FileUpload.css";
const FileUpload = () => {
  return (
    <div className="fileupload_Container">
      <div style={{ height:"70%"}}>
        <DragDrop />
      </div>
      <div >
        <SubmitFiles />
      </div>
    </div>
  );
};

export default FileUpload;
