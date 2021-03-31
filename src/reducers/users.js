import { GET_USERS } from "../actions/users";
import { SAVE_OPTION } from "../actions/options";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_OPTION:
      return {};
    default:
      return state;
  }
}
