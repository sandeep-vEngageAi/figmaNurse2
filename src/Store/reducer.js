import { ADD_FILES, FILES_ADDED,FILE_SENT, FILE_SENT_FAILURE,FILE_UPLOADING} from "./actionTypes";

const initialState = {
  files: {},
  uploaded:false,
  added:false,
  error:false,
  uploading:false
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
            files: [],
            uploaded:false,
            added:false,
            error:false,
            uploading:false
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
    default:
      return state;
  }
};
export default reducer;
