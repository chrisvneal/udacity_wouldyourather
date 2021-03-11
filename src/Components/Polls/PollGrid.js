import React, { Component } from "react";
import PollCard from "./PollCard";

export default class PollGrid extends Component {
  render() {
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
