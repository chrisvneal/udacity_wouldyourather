export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}
