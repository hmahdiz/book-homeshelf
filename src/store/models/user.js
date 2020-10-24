import userService from "../../services/userService";

const actionTypes = {
  Request: "REQUEST_USER",
  GetPurchases: "GET_PURCHASES",
  Purchase: "PURCHASE",
  Error: "ERROR",
};

export const getPurchases = (username) => async (dispatch) => {
  await userService.getPurchases({
    username,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (purchases) => dispatch({ type: actionTypes.GetPurchases, payload: { purchases } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export const purchase = (bookId, username) => async (dispatch) => {
  await userService.purchase({
    bookId,
    username,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (purchaseNo) => dispatch({ type: actionTypes.Purchase, payload: { purchaseNo } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export default function reducer(state = { purchases: [], error: "" }, action) {
  switch (action.type) {
    case actionTypes.GetPurchases:
      return { ...state, purchases: [...action.payload.purchases], error: "" };
    case actionTypes.Purchase:
      return { ...state, purchaseNo: action.payload.purchaseNo, error: "" };
    case actionTypes.Error:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
