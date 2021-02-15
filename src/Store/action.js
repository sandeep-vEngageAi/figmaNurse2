import {
  ADD_FILES,
  FILES_ADDED,
  FILE_SENT,
  FILE_SENT_FAILURE,
  FILE_UPLOADING,
  FETCH_AGAIN,
  SET_QRCODE
} from "./actionTypes";

export const addFiles = (files) => {
  return {
    type: ADD_FILES,
    files: files,
  };
};
export const fileUploading = (uploadingStatus) => {
  return {
    type: FILE_UPLOADING,
    uploadingStatus: uploadingStatus,
  };
};
export const filesAdded = (add) => {
  return {
    type: FILES_ADDED,
    addedStatus: add,
  };
};


export const fileSubmitting = (files) => {
  return (dispatch) => {
   
    //currently sending
    dispatch(fileUploading(true));
    var formdata = new FormData();

    formdata.append("file", files);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_SCREEN1_URL}/api/v1/sendFile`,
      requestOptions
    )
      .then((response) => {
        alert("FILESENT")
        dispatch(fetchingAgain(true))
        dispatch(fileSent());
      })
      .catch((error) => {
        dispatch(fileSentFailure());
      });
  };
};

export const fileSent = () => {
  return {
    type: FILE_SENT,
  };
};
export const fileSentFailure = () => {
  return {
    type: FILE_SENT_FAILURE,
  };
};

export const fetchingAgain = (fetchingStatus)=>{
  return{
    type:FETCH_AGAIN,
    fetchingStatus:fetchingStatus
  }
}



export const setQRCodeFunc = (QRCODE)=>{
  return{
    type:SET_QRCODE,
    updatedQRCode:QRCODE
  }
}