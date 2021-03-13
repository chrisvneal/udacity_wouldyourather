import tyler_mcginnis from "../images/tyler_mcginnis.png";
import sarah_edo from "../images/sarah_edo.png";
import john_doe from "../images/john_doe.png";
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
      src: tyler_mcginnis,
    },
  },
  {
    key: "sarahedo",
    text: "Sarah Edo",
    value: "sarahedo",
    image: {
      avatar: true,
      src: sarah_edo,
    },
  },
  {
    key: "johndoe",
    text: "John Doe",
    value: "johndoe",
    image: {
      avatar: true,
      src: john_doe,
    },
  },
];

export function mapVotesToPoll(pollIds, questions, type) {
  let pollsWithLikes = pollIds.map((poll) => {
    // console.log(poll);
    return {
      id: poll,
      author: questions[poll].author,
      votes: {
        optionOne: questions[poll].optionOne.votes.length,
        optionTwo: questions[poll].optionTwo.votes.length,
        total:
          questions[poll].optionOne.votes.length +
          questions[poll].optionTwo.votes.length,
      },
      type,
    };
  });
  return pollsWithLikes;
}
