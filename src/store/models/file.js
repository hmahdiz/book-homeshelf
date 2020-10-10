import apiCall from "../api/apiCall";

const actionTypes = {
  UploadFile: "UPLOAD_FILE",
};

export async function uploadFile(file) {
  return await apiCall.uploadFile({ file, success: () => ({ type: actionTypes.UploadFile }) });
}

export default function reducer(state = {}, action) {
  switch (action.actionType) {
    case actionTypes.UploadFile:
      return { error: "" };
    default:
      return state;
  }
}
