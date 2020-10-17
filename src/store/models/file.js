import fileService from "../../services/fileService";

const actionTypes = {
  UploadFile: "UPLOAD_FILE",
  Error: "ERROR",
};

export async function uploadFile(id, file) {
  return await fileService.uploadFrontImageBook(
    id,
    file,
    () => ({ type: actionTypes.UploadFile }),
    (err) => ({ type: actionTypes.Error, error: err })
  );
}

export default function reducer(state = {}, action) {
  switch (action.actionType) {
    case actionTypes.UploadFile:
      return { error: "" };
    case actionTypes.Error:
      return { error: action.error };
    default:
      return state;
  }
}
