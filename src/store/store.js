import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bookReducer from "./models/book";
import authorReducer from "./models/author";
import fileUploadReducer from "./models/file";

const reducers = combineReducers({ book: bookReducer, author: authorReducer, file: fileUploadReducer });
// const middlewares = applyMiddleware(thunk);
export default createStore(reducers);
