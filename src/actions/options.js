import { _saveQuestionAnswer } from "../apis/_DATA";

export const SAVE_OPTION = "SAVE_OPTION";

function saveOption({ authedUser, qid, answer }) {
  return {
    type: SAVE_OPTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveOption(option) {
  return (dispatch) => {
    dispatch(saveOption(option));

    return _saveQuestionAnswer(option).catch((e) => {
      console.warn("Error in handleSaveOption: ", e);
    });
  };
}
