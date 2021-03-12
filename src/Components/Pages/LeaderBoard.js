import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import HighestSelectionRank from "../Users/HighestSelectionRank";
import UserRankTable from "../Users/UserRankTable";
import SiteWrapper from "../Site/SiteWrapper";

export default class LeaderBoard extends Component {
  render() {
    return (
      <SiteWrapper>
        <div className="leaderboard">
          <Header as="h2" content="Leader Board" />
          <h3>Top Users With Most Questions Created</h3>
          <UserRankTable />
          <h3>Top Users With Most Answers</h3>
          <UserRankTable />
          <h3>Highest Answered Selections</h3>
          <HighestSelectionRank />
        </div>
      </SiteWrapper>
    );
  }
}
