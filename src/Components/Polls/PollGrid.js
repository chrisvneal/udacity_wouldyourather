import React, { Component } from "react";
import PollCard from "./PollCard";
import { splitQuestions } from "../../apis/helpers";

export default class PollGrid extends Component {
  render() {
    const { questions, authedUser, users, type } = this.props;

    // retrieve and sort [ ids ] for all questions
    const questIds_sorted = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    // retrieve and sort [ ids ] for all questions users answered
    const userAnswers = users[authedUser.id].answers;
    const userAnswers_sorted = Object.keys(userAnswers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    console.clear();
    // console.log("output: ", userAnswers, userAnswers_sorted);
    console.log("questions:", questions);
    console.log("authedUser:", authedUser);

    const sortedPolls = splitQuestions(questIds_sorted, userAnswers_sorted);

    let { all, answered, unanswered } = sortedPolls;

    // const length = questions[all[0]].optionOne.votes.length;
    // console.log("question length: ", length);

    console.log("sorted polls:", sortedPolls);

    function mapVotesToPoll(pollIds, questions, type) {
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

    all = mapVotesToPoll(all, questions, "all");
    answered = mapVotesToPoll(answered, questions, "answered");
    unanswered = mapVotesToPoll(unanswered, questions, "unanswered");

    let polls;

    switch (type) {
      case "answered":
        polls = answered;
        break;

      case "all":
        polls = all;
        break;

      case "unanswered":
        polls = unanswered;

        break;
      default:
        polls = ["no questions"];
    }

    // console.log("polls: ", polls);

    return (
      <div className="poll-grid">
        {polls.map((poll) => (
          <PollCard
            author={poll.author}
            key={poll.id}
            question={poll.id}
            likes={poll.votes.total}
          />
        ))}
      </div>
    );
  }
}
