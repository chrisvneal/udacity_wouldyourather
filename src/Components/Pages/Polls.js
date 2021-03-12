import React, { Component } from "react";
import { connect } from "react-redux";

import { splitQuestions, mapVotesToPoll } from "../../apis/helpers";
import { Header, Tab, MenuItem, Label } from "semantic-ui-react";
import PollGrid from "../Polls/PollGrid";
import SiteWrapper from "../Site/SiteWrapper";

class Polls extends Component {
  render() {
    // console.log(this.props);
    const { questions, authedUser, users } = this.props;

    // retrieve and sort [ ids ] for all questions
    const questIds_sorted = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    // retrieve and sort [ ids ] for all questions users answered
    const userAnswers = users[authedUser.id].answers;
    const userAnswers_sorted = Object.keys(userAnswers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    console.clear();

    const sortedPolls = splitQuestions(questIds_sorted, userAnswers_sorted);

    let { all, answered, unanswered } = sortedPolls;

    all = mapVotesToPoll(all, questions, "all");
    answered = mapVotesToPoll(answered, questions, "answered");
    unanswered = mapVotesToPoll(unanswered, questions, "unanswered");

    let polls = {
      all,
      answered,
      unanswered,
    };

    let panes = [
      {
        menuItem: (
          <MenuItem key="unanswered">
            Unanswered <Label>{polls.unanswered.length}</Label>
          </MenuItem>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <PollGrid polls={polls.unanswered} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: (
          <MenuItem key="answered">
            Answered <Label>{polls.answered.length}</Label>
          </MenuItem>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <PollGrid polls={polls.answered} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: (
          <MenuItem key="all">
            All <Label>{polls.all.length}</Label>
          </MenuItem>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <PollGrid polls={polls.all} />
          </Tab.Pane>
        ),
      },
    ];

    return (
      <SiteWrapper>
        <div className="polls">
          <Header as="h2" content="Polls" dividing />
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      </SiteWrapper>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    authedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(Polls);
