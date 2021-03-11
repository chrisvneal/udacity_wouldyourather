import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Tab, MenuItem, Label } from "semantic-ui-react";
import PollGrid from "../Polls/PollGrid";

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
          <PollGrid type="unanswered" />
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
          <PollGrid type="answered" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <MenuItem key="all">
          All <Label>15</Label>
        </MenuItem>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <PollGrid type="all" />
        </Tab.Pane>
      ),
    },
  ];

  render() {
    console.log(this.props);
    return (
      <div className="polls">
        <Header as="h2" content="Polls" dividing />

        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
      </div>
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
