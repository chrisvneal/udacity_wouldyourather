import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import HighestSelectionRank from "../Users/HighestSelectionRank";
import UserRankTable from "../Users/UserRankTable";
import SiteWrapper from "../Site/SiteWrapper";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    console.log("props, users ", users);

    let users_highQuestions = users.sort((a, b) => {
      return b.questionsCreated - a.questionsCreated;
    });

    let users_highAnswers = users.sort((a, b) => {
      return b.questionsAnswered - a.questionsAnswered;
    });

    // console.log("Highest Questions: ", users_highQuestions);
    // console.log("Highest Answers: ", users_highAnswers);

    // console.log(type);
    return (
      <SiteWrapper>
        <div className="leaderboard">
          <Header as="h2" content="Leader Board" />
          <h3>Top Users With Most Questions Created</h3>
          <UserRankTable
            type="most_questions"
            rankedUsers={users_highQuestions}
          />
          <h3>Top Users With Most Answers</h3>
          <UserRankTable type="most_answers" rankedUsers={users_highAnswers} />
          <h3>Highest Answered Selections</h3>
          <HighestSelectionRank />
        </div>
      </SiteWrapper>
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

export default connect(mapStateToProps)(LeaderBoard);
