import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import UserRankEntry from "./UserRankEntry";

class UserRankTable extends Component {
  render() {
    return (
      <React.Fragment>
        <Table basic="very" className="user-rank-table" collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Questions Created</Table.HeaderCell>
              <Table.HeaderCell>Questions Answered</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{}</Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }, type) {
  // console.log("users questions: ", users[authedUser.id].questions);
  // console.log("output:", Object.entries(users[authedUser.id].answers).length);

  // build a conditional sorting entries based on the 'type of table'

  // let bank = [];
  let rankedUsers = {};
  for (let user in users) {
    rankedUsers[user] = {
      id: user,
      questionsCreated: users[user].questions.length,
      questionsAnswered: Object.entries(users[user].answers).length,
      totalScore:
        users[user].questions.length +
        Object.entries(users[user].answers).length,
    };
  }

  // console.log("ranked Users", rankedUsers);

  return {
    users: rankedUsers,
  };
}

export default connect(mapStateToProps)(UserRankTable);
