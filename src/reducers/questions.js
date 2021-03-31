import { GET_QUESTIONS } from "../actions/questions";
import { SAVE_OPTION } from "../actions/options";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_OPTION:
      return {};
    default:
      return state;
  }
}
