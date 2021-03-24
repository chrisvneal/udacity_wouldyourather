import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading";
import saveOption from "./saveOption";

export default combineReducers({
  authedUser,
  users,
  questions,
  saveOption,
  loadingBar: loadingBarReducer,
});
