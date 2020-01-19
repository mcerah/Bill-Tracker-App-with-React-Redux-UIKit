import { combineReducers } from "redux";
import billReducer from "./billReducer";
import errorsReducer from "./errorsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  billReducer,
  errorsReducer,
  authReducer
});
