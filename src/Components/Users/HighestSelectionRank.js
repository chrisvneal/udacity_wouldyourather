import React from "react";
import { Table } from "semantic-ui-react";
import HighSelectionEntry from "./HighSelectionEntry";
import { generateKey } from "../../apis/helpers";

export default function HighestSelectionRank(props) {
  let votesOpts = [];

  props.questions.forEach((question) => {
    let opt1 = [question.options[0].votes.length, question.options[0].text];
    let opt2 = [question.options[1].votes.length, question.options[1].text];

    votesOpts.push(opt1);
    votesOpts.push(opt2);
  });

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
          {votesOpts
            .sort((a, b) => {
              return b[0] - a[0];
            })
            .map((question) => (
              <HighSelectionEntry
                key={generateKey(8)}
                votes={question[0]}
                text={question[1]}
              />
            ))}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
}
