import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import HighestSelectionRank from "../HighestSelectionRank";
import UserRankTable from "../UserRankTable";

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <Header as="h2" content="Leader Board" dividing />

        <h3>Top Users With Most Questions Created</h3>
        <UserRankTable />

        <h3>Top Users With Most Answers</h3>
        <UserRankTable />

        <h3>Highest Answered Selections</h3>
        <HighestSelectionRank />
      </div>
    );
  }
}
