import localStorage from "../../utils/local-storage";
import authenticationService from "../../services/authenticationService";

const actionTypes = {
  Request: "REQUEST",
  SetUserInfo: "SET_USER_INFO",
  Error: "ERROR",
};

export const signUp = (data) => async (dispatch) => {
  await authenticationService.signUp({
    data,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (savedUser) => {
      localStorage.setUserItem(savedUser);
      return dispatch({ type: actionTypes.SetUserInfo, payload: savedUser });
    },
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export const signIn = (data) => async (dispatch) => {
  await authenticationService.signIn({
    data,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (savedUser) => {
      localStorage.setUserItem(savedUser);
      return dispatch({ type: actionTypes.SetUserInfo, payload: savedUser });
    },
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export function setCurrentUserInfo() {
  const userInfo = localStorage.getUserItem();
  return {
    type: actionTypes.SetUserInfo,
    payload: userInfo,
  };
}

export function removeCurrentUserInfo() {
  localStorage.removeUserItem();
  return {
    type: actionTypes.SetUserInfo,
    payload: null,
  };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.SetUserInfo:
      return { user: action.payload, error: "" };
    case actionTypes.Error:
      return { user: null, error: action.payload.error };
    default:
      return state;
  }
}
