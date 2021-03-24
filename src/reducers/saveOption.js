import { SAVE_OPTION } from "../actions/options";

export default function saveOption(state = {}, action) {
  const { authedUser, qid, answer } = action;
  switch (action.type) {
    case SAVE_OPTION:
      return {
        ...state,
        users: {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            answers: {
              ...state.users[authedUser].answers,
              [qid]: answer,
            },
          },
        },
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: state.questions[qid][answer].votes.concat([authedUser]),
            },
          },
        },
      };
    default:
      return state;
  }
}
