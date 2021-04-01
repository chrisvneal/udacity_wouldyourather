import { GET_QUESTIONS, SAVE_QUESTION } from "../actions/questions";
import { SAVE_OPTION } from "../actions/options";
import { generateUID } from "../apis/_DATA";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_OPTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(
              action.authedUser
            ),
          },
        },
      };
    case SAVE_QUESTION:
      let newQuestionUID = generateUID();
      return {
        ...state,
        [newQuestionUID]: {
          id: newQuestionUID,
          author: action.question.author,
          timestamp: Date.now(),
          optionOne: {
            votes: [],
            text: action.question.optionOneText,
          },
          optionTwo: {
            votes: [],
            text: action.question.optionTwoText,
          },
        },
      };
    default:
      return state;
  }
}
