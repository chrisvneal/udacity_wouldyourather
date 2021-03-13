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

          <Table.Body>
            <UserRankEntry />
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(UserRankTable);
