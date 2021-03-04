import { _getUsers, _getQuestions } from "../apis/_DATA";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

export const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return new Promise.all([_getUsers, _getQuestions]).then(
      ({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
      }
    );
  };
}
