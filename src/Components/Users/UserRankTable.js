import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import UserRankEntry from "./UserRankEntry";

class UserRankTable extends Component {
  render() {
    // const userRank = this.props.users.sort((a, b) => {
    //   return b.questionsCreated - a.questionsCreated;
    // });
    console.clear();
    console.log("props, users ", this.props.users);
    // console.log(
    //   this.props.sort((a, b) => {
    //     return b.questionsCreated - a.questionsCreated;
    //   })
    // );

    // console.log(type);
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

            {/* {this.props.users
              .sort((a, b) => {
                return b.questionsCreated - a.questionsCreated;
              })
              .map((user) => {
                return (
                  <UserRankEntry
                    username={user.username}
                    key={user.username}
                    numQuestions={user.questionsCreated}
                    numAnswers={user.questionsAnswered}
                    totalScore={user.totalScore}
                  />
                );
              })} */}
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }, type) {
  // Initialize an array of new objects containing user rank info
  let rankedUsers = [];

  // loop through an array of original user objects ...
  for (let user in users) {
    // ... and create new objects from those objects.
    let rankedUser = {
      id: user,
      questionsCreated: users[user].questions.length,
      questionsAnswered: Object.entries(users[user].answers).length,
      totalScore:
        users[user].questions.length +
        Object.entries(users[user].answers).length,
    };

    //  Stash them all into an array!
    rankedUsers.push(rankedUser);
  }

  // console.log("Ranked Users: ", rankedUsers);
  // let usersMostQuestions = rankedUsers.sort((a, b) => {
  //   return b.questionsCreated - a.questionsCreated;
  // });

  // sort new array of rankedUser into two new separate arrays of objects

  // return an array of objects

  // let usersMostAnswers = rankedUsers.sort((a, b) => {
  //   return b.questionsAnswered - a.questionsAnswered;
  // });

  return {
    users: rankedUsers,
  };
}

export default connect(mapStateToProps)(UserRankTable);
