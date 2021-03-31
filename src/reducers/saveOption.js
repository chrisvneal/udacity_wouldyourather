import { SAVE_OPTION } from "../actions/options";

export default function saveOption(state = {}, action) {
  const { authedUser, qid, answer } = action;
  switch (action.type) {
    case SAVE_OPTION:
      return {};
    default:
      return state;
  }
}
