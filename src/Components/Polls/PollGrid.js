import React, { Component } from "react";
import PollCard from "./PollCard";
import { connect } from "react-redux";

class PollGrid extends Component {
  render() {
    const { questions, authedUser, users } = this.props;

    // retrieve and sort [ ids ] for all questions
    const questionIds = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    console.log("questionIds object:", questionIds);

    // retrieve and sort [ ids ] for all questions user answered
    // const answers = users[authedUser]["answers"];
    // const userAnsweredPollIds = Object.keys(answers).sort(
    //   (a, b) => answers[b].timestamp - answers[a].timestamp
    // );

    // retrieve and sort [ ids ] for all questions user didn't answer

    // console.log("users answers: ", userAnsweredPollIds);

    const type = this.props.type;

    let polls;
    if (type === "answered") {
      polls = [9698776];
    }

    if (type === "all") {
      polls = [7687767, 676696896, 69768];
    }

    if (type === "unanswered") {
      polls = [3684343, 4234324, 324234234, 3434234, 242662];
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
