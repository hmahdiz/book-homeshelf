import fileService from "../../services/fileService";

const actionTypes = {
  Request: "REQUEST_FILE",
  UploadFile: "UPLOAD_FILE",
  Error: "ERROR",
};

export const uploadFile = (id, file) => async (dispatch) => {
  await fileService.uploadFrontImageBook({
    id,
    file,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: () => dispatch({ type: actionTypes.UploadFile }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error } }),
  });
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.Request:
      return { error: "", loading: true };
    case actionTypes.UploadFile:
      return { error: "", loading: false };
    case actionTypes.Error:
      return { error: action.payload.error, loading: false };
    default:
      return state;
  }
}
