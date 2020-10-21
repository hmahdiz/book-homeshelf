import userService from "../../services/userService";
import { func } from "prop-types";

const actionTypes = {
  GetPurchases: "GET_PURCHASES",
  Purchase: "PURCHASE",
  Error: "ERROR",
};

export async function getPurchases(username) {
  return await userService.getPurchases(
    username,
    (purchases) => ({ type: actionTypes.GetPurchases, payload: { purchases } }),
    (error) => ({ type: actionTypes.Error, payload: { error } })
  );
}

export async function purchase(bookId, username) {
  return await userService.purchase(
    bookId,
    username,
    (purchaseNo) => ({ type: actionTypes.Purchase, payload: { purchaseNo } }),
    (error) => ({ type: actionTypes.Error, payload: { error } })
  );
}

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
