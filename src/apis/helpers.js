import cap_america from "../images/cap_america.png";
import wonder_woman from "../images/wonder_woman.png";
import robin from "../images/robin.png";
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

// set of users for application
export const users = [
  {
    key: "tylermcginnis",
    text: "Tyler McGinnis",
    value: "tylermcginnis",
    image: {
      avatar: true,
      src: cap_america,
    },
  },
  {
    key: "sarahedo",
    text: "Sarah Edo",
    value: "sarahedo",
    image: {
      avatar: true,
      src: wonder_woman,
    },
  },
  {
    key: "johndoe",
    text: "John Doe",
    value: "johndoe",
    image: {
      avatar: true,
      src: robin,
    },
  },
];
