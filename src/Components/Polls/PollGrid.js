import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";

class PollGrid extends Component {
  render() {
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
  // get ids for all questions
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  // const userAnsweredPolls = Object.keys(users[authedUser].answers);

  // console.log("users: ", typeof userAnsweredPolls);

  return {
    questionIds: {
      answered: ["answered"],
      unanswered: ["unanswered"],
      all: questionIds,
    },
    authedUser,
  };
}

export default connect(mapStateToProps)(PollGrid);
