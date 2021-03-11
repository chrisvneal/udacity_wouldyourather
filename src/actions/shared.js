import { _getUsers, _getQuestions } from "../apis/_DATA";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(hideLoading());
      }
    );
  };
}
