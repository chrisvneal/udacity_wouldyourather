import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";

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
    console.log("output: ", userAnswers, userAnswers_sorted);

    let polls;

    switch (type) {
      case "answered":
        polls = [9698776];
        break;

      case "all":
        polls = [7687767, 676696896, 69768];
        break;

      case "unanswered":
        polls = [3684343, 4234324, 324234234, 3434234, 242662];

        break;
      default:
        polls = ["no questions"];
    }

    return (
      <div className="poll-grid">
        {polls.map((poll) => (
          <PollCard key={poll} question={poll} />
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
