import React from "react";
import { Table } from "semantic-ui-react";

export default function UserRankEntry({
  username,
  numQuestions,
  numAnswers,
  totalScore,
  userAvatar,
}) {
  return (
    <React.Fragment>
      <Table.Row>
        <Table.Cell>
          <img
            src={userAvatar}
            alt="user avatar"
            className="leaderboard-avatar"
          />
        </Table.Cell>
        <Table.Cell>{username}</Table.Cell>
        <Table.Cell>{numQuestions}</Table.Cell>
        <Table.Cell>{numAnswers}</Table.Cell>
        <Table.Cell>{totalScore}</Table.Cell>
      </Table.Row>
    </React.Fragment>
  );
}
