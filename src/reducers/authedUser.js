import { SET_AUTHED_USER, LOG_OUT_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        id: action.id,
        loggedIn: true,
      };
    case LOG_OUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
