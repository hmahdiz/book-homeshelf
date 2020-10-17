import localStorage from "../../utils/local-storage";
import authenticationService from "../../services/authenticationService";

const actionTypes = {
  SetUserInfo: "SET_USER_INFO",
  Error: "ERROR",
};

export async function signUp(data) {
  return await authenticationService.signUp(
    data,
    (savedUser) => {
      localStorage.setUserItem(savedUser);
      return { type: actionTypes.SetUserInfo, payload: savedUser };
    },
    (err) => ({ type: actionTypes.Error, payload: err })
  );
}

export async function signIn(data) {
  return await authenticationService.signIn(
    data,
    (savedUser) => {
      localStorage.setUserItem(savedUser);
      return { type: actionTypes.SetUserInfo, payload: savedUser };
    },
    (err) => ({ type: actionTypes.Error, payload: err })
  );
}

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
      return { error: action.payload, user: null };
    default:
      return state;
  }
}
