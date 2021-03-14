import React from "react";
import { Table } from "semantic-ui-react";
import HighSelectionEntry from "./HighSelectionEntry";

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
          {/* loop through entries here */}
          <HighSelectionEntry votes={2} text="Good job" />
        </Table.Body>
      </Table>
    </React.Fragment>
  );
}
