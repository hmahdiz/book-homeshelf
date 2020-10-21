import { createStore, combineReducers } from "redux";
import bookReducer from "./models/book";
import authorReducer from "./models/author";
import fileUploadReducer from "./models/file";
import authenticationReducer from "./models/authentication";
import userReducer from "./models/user";

const reducers = combineReducers({
  book: bookReducer,
  author: authorReducer,
  file: fileUploadReducer,
  authentication: authenticationReducer,
  user: userReducer,
});

export default createStore(reducers);
