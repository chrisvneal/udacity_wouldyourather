import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";

class PollGrid extends Component {
  render() {
    console.log("questionIds object:", this.props.questionIds);
    return (
      <div className="poll-grid">
        {this.props.questionIds.all.map((id) => (
          <PollCard key={id} question={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  // retrieve and sort [ ids ] for all questions
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  // retrieve & sort [ ids ] for all questions user answered
  const answers = users[authedUser]["answers"];

  const userAnsweredPolls = Object.keys(answers).sort(
    (a, b) => answers[b].timestamp - answers[a].timestamp
  );

  return {
    questionIds: {
      answered: userAnsweredPolls,
      unanswered: ["unanswered"],
      all: questionIds,
    },
    authedUser,
  };
}

export default connect(mapStateToProps)(PollGrid);
