import apiCall from "../api/apiCall";

const actionTypes = {
  GetAll: "GET_ALL",
  Error: "ERROR",
};

export function getAll() {
  return apiCall.getAuthors(
    (authors) => ({ type: actionTypes.GetAll, payload: { authors } }),
    (error) => ({ type: actionTypes.Error, payload: { error } })
  );
}

export default function mm(state = {}, action) {
  switch (action.type) {
    case actionTypes.GetAll:
      return { ...state, all: action.payload.authors, error: "" };
    default:
      return state;
  }
}
