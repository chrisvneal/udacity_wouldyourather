import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";

class PollGrid extends Component {
  render() {
    return (
      <div className="poll-grid">
        {this.props.questionIds.map((id) => (
          <PollCard key={id} question={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
  };
}

export default connect(mapStateToProps)(PollGrid);
