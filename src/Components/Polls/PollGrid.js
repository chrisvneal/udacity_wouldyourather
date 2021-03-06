import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";

class PollGrid extends Component {
  render() {
    return (
      <div className="poll-grid">
        {this.props.questionIds.unanswered.map((id) => (
          <PollCard key={id} question={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    questionIds: {
      answered: ["answered"],
      unanswered: ["unanswered"],
    },
    authedUser,
  };
}

export default connect(mapStateToProps)(PollGrid);
