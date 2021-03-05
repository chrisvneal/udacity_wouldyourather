import React, { Component } from "react";
import { Header, Tab, MenuItem, Label } from "semantic-ui-react";
import PollGrid from "../Polls/PollGrid";
import { connect } from "react-redux";

class Polls extends Component {
  panes = [
    {
      menuItem: (
        <MenuItem key="unanswered">
          Unanswered <Label>15</Label>
        </MenuItem>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <PollGrid questions={this.unansweredQuestions()} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <MenuItem key="answered">
          Answered <Label>15</Label>
        </MenuItem>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <PollGrid questions={this.answeredQuestions()} />
        </Tab.Pane>
      ),
    },
  ];

  unansweredQuestions = () => {
    return ["poopy"];
  };

  answeredQuestions = () => {
    return ["mommy", "daddy"];
  };
  render() {
    return (
      <div className="polls">
        <Header as="h2" content="Polls" dividing />

        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
  };
}

export default connect(mapStateToProps)(Polls);
