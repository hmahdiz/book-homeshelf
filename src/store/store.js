import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bookReducer from "./models/book";
import authorReducer from "./models/author";
import fileUploadReducer from "./models/file";
import authenticationReducer from "./models/authentication";
import userReducer from "./models/user";

const reducers = combineReducers({
  book: bookReducer,
  file: fileUploadReducer,
  author: authorReducer,
  authentication: authenticationReducer,
  user: userReducer,
});

export default createStore(reducers, applyMiddleware(thunk));
