import fileService from "../../services/fileService";

const actionTypes = {
  Request: "REQUEST",
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
  switch (action.actionType) {
    case actionTypes.UploadFile:
      return { error: "" };
    case actionTypes.Error:
      return { error: action.payload.error };
    default:
      return state;
  }
}
