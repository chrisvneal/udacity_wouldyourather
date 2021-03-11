import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        id: action.id,
        loggedIn: true,
      };
    default:
      return state;
  }
}
