import React, { Component } from "react";
import PollCard from "./PollCard";
import { Divider, Progress } from "semantic-ui-react";
// import { Header } from "semantic-ui-react";

export default class PollResults extends Component {
  render() {
    return (
      <div className="poll-results">
        <h2 className="center">Would You Rather...?</h2>
        <div className="poll-results-cards">
          <PollCard />
          <PollCard />
        </div>
        <Progress
          value="2"
          total="4"
          progress="percent"
          className="poll-progress">
          2 out of 4 people voted
        </Progress>

        <Divider />
      </div>
    );
  }
}
