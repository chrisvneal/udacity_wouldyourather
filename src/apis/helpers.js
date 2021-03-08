export function splitQuestions(allQuestions, userAnswers) {
  // copy all questions into an array
  let originalQuestions = [...allQuestions];
  // initialize index of question to be compared to...
  let questionIndex;
  // ... so when comparing user answered questions...
  for (let answer of userAnswers) {
    for (let question of allQuestions) {
      if (answer === question) {
        // ... we can remove questions user has answered
        questionIndex = allQuestions.indexOf(question);
        allQuestions.splice(questionIndex, 1);
      }
    }
  }
  // return object of all, answered, and unanswered questions
  return {
    answered: userAnswers,
    unanswered: allQuestions,
    all: originalQuestions,
  };
}
// end of function
