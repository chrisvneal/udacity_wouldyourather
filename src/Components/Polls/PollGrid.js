import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";
import { splitQuestions } from "../../apis/helpers";

class PollGrid extends Component {
  render() {
    const { questions, authedUser, users, type } = this.props;

    // retrieve and sort [ ids ] for all questions
    const questIds_sorted = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    // retrieve and sort [ ids ] for all questions users answered
    const userAnswers = users[authedUser].answers;
    const userAnswers_sorted = Object.keys(userAnswers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    console.clear();
    // console.log("output: ", userAnswers, userAnswers_sorted);
    console.log("questions:", questions);
    console.log("authedUser:", authedUser);

    const sortedPolls = splitQuestions(questIds_sorted, userAnswers_sorted);

    console.log("sorted polls:", sortedPolls);

    const { all, answered, unanswered } = sortedPolls;

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

    return (
      <div className="poll-grid">
        {polls.map((poll) => (
          <PollCard key={poll} question={poll} likes={2} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    authedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(PollGrid);
