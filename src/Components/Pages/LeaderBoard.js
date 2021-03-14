import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import HighestSelectionRank from "../Users/HighestSelectionRank";
import UserRankTable from "../Users/UserRankTable";
import SiteWrapper from "../Site/SiteWrapper";

class LeaderBoard extends Component {
  render() {
    const { rankedUsers, rankedQuestions } = this.props;
    console.log("Ranked quests: ", rankedQuestions);

    return (
      <SiteWrapper>
        <div className="leaderboard">
          <Header as="h2" content="Leader Board" />
          <h3>Top Users With Most Questions Created</h3>
          <UserRankTable rankedUsers={rankedUsers.highQuestions} />
          <h3>Top Users With Most Answers</h3>
          <UserRankTable rankedUsers={rankedUsers.highAnswers} />
          <h3>Highest Answered Selections</h3>
          <HighestSelectionRank questions={rankedQuestions} />
        </div>
      </SiteWrapper>
    );
  }
}

function mapStateToProps({ users, questions }) {
  console.log("mapped", questions);
  let rankedQuestions = [];
  for (let question in questions) {
    // console.log("question:", questions[question]);
    let rankedQuestion = {
      id: questions[question].id,
      author: questions[question].author,
      options: [questions[question].optionOne, questions[question].optionTwo],
    };

    rankedQuestions.push(rankedQuestion);
  }

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

  let rankedUsersCopy = [...rankedUsers];

  return {
    rankedQuestions: rankedQuestions,
    rankedUsers: {
      highQuestions: rankedUsers.sort((a, b) => {
        return b.questionsCreated - a.questionsCreated;
      }),
      highAnswers: rankedUsersCopy.sort((a, b) => {
        return b.questionsAnswered - a.questionsAnswered;
      }),
    },
  };
}

export default connect(mapStateToProps)(LeaderBoard);
