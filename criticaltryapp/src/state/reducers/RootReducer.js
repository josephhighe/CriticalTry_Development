import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AccountReducer from "./AccountReducer";

const RootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    AccountReducer
  });

export default RootReducer;
