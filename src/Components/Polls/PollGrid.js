import React, { Component } from "react";
import PollCard from "./PollCard";

export default class PollGrid extends Component {
  render() {
    const { polls } = this.props;
    return (
      <div className="poll-grid">
        {polls.map((poll) => (
          <PollCard
            author={poll.author}
            key={poll.id}
            id={poll.id}
            question={`${poll.text}...`}
            likes={poll.votes.total}
          />
        ))}
      </div>
    );
  }
}
