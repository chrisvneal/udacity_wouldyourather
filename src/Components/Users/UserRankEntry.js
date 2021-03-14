import React from "react";
import { Table, Icon } from "semantic-ui-react";

export default function UserRankEntry(props) {
  return (
    <React.Fragment>
      <Table.Row>
        <Table.Cell>
          <Icon name="user circle" size={"big"} />
        </Table.Cell>
        <Table.Cell>{props.username}</Table.Cell>
        <Table.Cell>{props.numQuestions}</Table.Cell>
        <Table.Cell>{props.numAnswers}</Table.Cell>
        <Table.Cell>{props.totalScore}</Table.Cell>
      </Table.Row>
    </React.Fragment>
  );
}
