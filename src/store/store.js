import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./reducers/useReducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  usersPage: userReducers,
});

export const  store = createStore(rootReducer, applyMiddleware(thunk));
