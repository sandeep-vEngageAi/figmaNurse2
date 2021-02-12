import {
  ADD_FILES,
  FILES_ADDED,
  FILE_SENT,
  FILE_SENT_FAILURE,
  FILE_UPLOADING,
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
  console.log("FILESUBMITING", files);
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
