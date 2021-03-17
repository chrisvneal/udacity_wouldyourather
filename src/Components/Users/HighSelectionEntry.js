import React from "react";
import { Table } from "semantic-ui-react";

export default function HighSelectionEntry(props) {
  console.log("High Selection Props: ", props);
  return (
    <Table.Row>
      <Table.Cell>{props.votes}</Table.Cell>

      <Table.Cell>{props.text}</Table.Cell>
    </Table.Row>
  );
}
