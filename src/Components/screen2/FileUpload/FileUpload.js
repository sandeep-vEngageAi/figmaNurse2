import React from "react";
import SelectFiles from "./FileSelection/SelectFiles";
import SubmitFiles from "./FileSubmit/SubmitFiles";
import "./FileUpload.css";
const FileUpload = () => {
  return (
    <div className="fileupload_Container">
      <div style={{ height:"70%"}}>
        <SelectFiles />
      </div>
      <div >
        <SubmitFiles />
      </div>
    </div>
  );
};

export default FileUpload;
