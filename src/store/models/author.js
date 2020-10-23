import authorService from "../../services/authorService";

const actionTypes = {
  Request: "REQUEST",
  GetAll: "GET_ALL",
  Error: "ERROR",
};

export const getAll = () => async (dispatch) => {
  await authorService.getAll({
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (authors) => dispatch({ type: actionTypes.GetAll, payload: { authors } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error } }),
  });
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GetAll:
      return { ...state, all: action.payload.authors, error: "", loading: false };

    case actionTypes.Error:
      return { all: [], error: action.payload.error, loading: false };

    case actionTypes.Request:
      return { ...state, error: "", loading: true };

    default:
      return state;
  }
}
