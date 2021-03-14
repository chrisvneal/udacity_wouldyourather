import React from "react";
import { Table } from "semantic-ui-react";

export default function HighSelectionEntry(props) {
  return (
    <Table.Row>
      <Table.Cell>{props.votes}</Table.Cell>

      <Table.Cell>{props.text}</Table.Cell>
    </Table.Row>
  );
}
