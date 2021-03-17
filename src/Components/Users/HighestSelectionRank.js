import React from "react";
import { Table } from "semantic-ui-react";
import HighSelectionEntry from "./HighSelectionEntry";

export default function HighestSelectionRank(props) {
  console.clear();
  console.log("highest Selection Rank props: ", props.questions);
  // console.log('')

  // let votesOpts = [];

  let votesOpts = props.questions.map((question) => {
    let opt1 = [question.options[0].votes.length, question.options[0].text];
    let opt2 = [question.options[1].votes.length, question.options[1].text];
    let gatheredOptions = [];

    gatheredOptions.push(opt1);
    gatheredOptions.push(opt2);

    return gatheredOptions;
  });

  console.log("votesOpts", votesOpts);

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
              <React.Fragment>
                <HighSelectionEntry
                  key={question[1]}
                  votes={question[0]}
                  text={question[1]}
                />
              </React.Fragment>
            ))}

          {/* <HighSelectionEntry votes={2} text="Good job" /> */}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
}
