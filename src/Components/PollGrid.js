import React, { Component } from "react";
import PollCard from "./PollCard";

export default class PollGrid extends Component {
  render() {
    return (
      <div className="poll-grid">
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
