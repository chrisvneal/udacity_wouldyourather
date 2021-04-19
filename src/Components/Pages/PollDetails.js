import React, { Component } from "react";
import { Header, Grid } from "semantic-ui-react";
import PollResults from "../Polls/PollResults";
import ErrorPage from "./ErrorPage";
// import { Redirect } from "react-router-dom";

import UserInfo from "../Users/UserInfo";
import SiteWrapper from "../Site/SiteWrapper";
import { connect } from "react-redux";

class PollDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log("ID: ", id);
    const { questions, users, authedUser } = this.props;

    console.log(Object.keys(questions));

    if (!Object.keys(questions).includes(id)) {
      console.clear();
      console.log("that id cannot be found");
      return <ErrorPage />;
    }
    const poll_author = questions[id].author;
    const questionsCreated = users[poll_author].questions.length;
    const questionsAnswered = Object.keys(users[poll_author].answers).length;
    let usersWhoVoted = questions[id].optionOne.votes.concat(
      questions[id].optionTwo.votes
    );
    const userAvatar = users[poll_author].avatarURL;

    return (
      <SiteWrapper>
        <div className="poll-details">
          <Header as="h2" content="Poll Details" />
          <Grid width={16}>
            <Grid.Row columns={3}>
              <Grid.Column width={5}>
                <Header as="h3" content="Created by" />
                <UserInfo
                  author={poll_author}
                  created={questionsCreated}
                  answered={questionsAnswered}
                  avatar={userAvatar}
                />
              </Grid.Column>
              <Grid.Column width={11}>
                <PollResults
                  result={id}
                  questions={questions}
                  authedUser={authedUser}
                  usersWhoVoted={usersWhoVoted}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </SiteWrapper>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser: authedUser.id,
  };
}

export default connect(mapStateToProps)(PollDetails);
