import React from "react";
import { Table } from "semantic-ui-react";

export default function HighestSelectionRank() {
  return (
    <React.Fragment>
      <Table basic="very" collapsing className="highest-selection-rank">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell># of votes</Table.HeaderCell>
            <Table.HeaderCell>Selection</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>50</Table.Cell>

            <Table.Cell>This is a selection</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  );
}
