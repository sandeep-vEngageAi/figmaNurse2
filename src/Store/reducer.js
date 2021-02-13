import { ADD_FILES, FILES_ADDED,FILE_SENT, FILE_SENT_FAILURE,FILE_UPLOADING,FETCH_AGAIN, SET_QRCODE} from "./actionTypes";

const initialState = {
  files: {},
  uploaded:false,
  added:false,
  error:false,
  uploading:false,
  fetchAgain:false,
  QRCode:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILES:
        
      return { ...state, files: action.files};
    case FILES_ADDED:
        return{
            ...state, added:action.addedStatus
        }
    case FILE_SENT:
        return{
          ...state,
            // files: [],
            uploaded:false,
            added:false,
            error:false,
            uploading:false,
        }
    case FILE_SENT_FAILURE:
        return{
        ...state, error:true,
        uploading:false
    }
    case FILE_UPLOADING:
      return{
        ...state, uploading:action.uploadingStatus
      }
    case FETCH_AGAIN:
      return{
        ...state,fetchAgain:action.fetchingStatus
      }
    case SET_QRCODE:
      return{
        ...state,QRCode:action.updatedQRCode
      }
    default:
      return state;
  }
};
export default reducer;
