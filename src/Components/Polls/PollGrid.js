import React, { Component } from "react";
import PollCard from "./PollCard";

export default class PollGrid extends Component {
  render() {
    return (
      <div className="poll-grid">
        {this.props.questions.map((id) => (
          <PollCard key={id} question={id} />
        ))}
      </div>
    );
  }
}
