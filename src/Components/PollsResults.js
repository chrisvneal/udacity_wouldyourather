import React, { Component } from "react";
import PollCard from "./PollCard";

export default class PollsResults extends Component {
  render() {
    return (
      <div className="poll-results">
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
      </div>
    );
  }
}
