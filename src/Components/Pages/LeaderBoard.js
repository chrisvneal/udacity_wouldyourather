import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import UserRankTable from "../UserRankTable";

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <Header as="h2" content="Leader Board" />

        <UserRankTable label="Top Users With Most Questions Created" />
        <UserRankTable label="Top Users With Most Answers" />
      </div>
    );
  }
}
