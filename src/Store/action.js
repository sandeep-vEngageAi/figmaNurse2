import { ADD_FILES, FILES_ADDED, FILE_SENT,FILE_SENT_FAILURE,FILE_UPLOADING } from "./actionTypes";

export const addFiles = (files) => {
  return {
    type: ADD_FILES,
    files: files,
  };
};
export const fileUploading = (uploadingStatus)=>{
  return{
    type:FILE_UPLOADING,
    uploadingStatus:uploadingStatus
  }
}
export const filesAdded = (add) => {
  return {
    type: FILES_ADDED,
    addedStatus: add,
  };

};
let allTextRead ="";
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                allTextRead = (allText);
            }
        }
    }
    rawFile.send(null);
}
export const fileSubmitting = (files) => {
 let allText =  readTextFile(files);
//  alert(allTextRead)
 console.log("ALLTEXT", allTextRead);
  console.log("FILESUBMITING",files)
  return (dispatch) => {
    
    // for (const file of files) {
      //   formdata.append("files", file);
      // }
      
      // for textdata
      let dataToBeSent = { text: allText };
      
      var requestOptionsforText = {
        method: "POST",
        body: JSON.stringify(dataToBeSent),
        headers: { "content-type": "application/json" },
      };
      
    
      
      //currently sending
      dispatch(fileUploading(true))
      var formdata = new FormData();
  
        formdata.append("file", files);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_SCREEN1_URL}/api/v1/uploadfile`,
      requestOptions
    )
      .then((response) => {
        dispatch(fileSent());
      })
      .catch((error) => {
        dispatch(fileSentFailure());
      });
  };
};

export const fileSent = () =>{
    return{
        type:FILE_SENT
    }
}
export const fileSentFailure = () =>{
    return {
        type: FILE_SENT_FAILURE
    }
}