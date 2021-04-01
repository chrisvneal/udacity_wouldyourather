export const SAVE_OPTION = "SAVE_OPTION";

export function saveOption({ authedUser, qid, answer }) {
  return {
    type: SAVE_OPTION,
    authedUser,
    qid,
    answer,
  };
}
