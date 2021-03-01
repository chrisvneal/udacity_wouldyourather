import React, { Component } from "react";
import { Header, Tab, MenuItem, Label } from "semantic-ui-react";
import PollsResults from "../PollsResults";

export default class Polls extends Component {
  panes = [
    {
      menuItem: (
        <MenuItem key="unanswered">
          Unanswered <Label>15</Label>
        </MenuItem>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          <PollsResults type="unanswered" />
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
          <PollsResults type="answered" />
        </Tab.Pane>
      ),
    },
  ];
  render() {
    return (
      <div className="polls">
        <Header as="h2" content="Polls" dividing />

        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
      </div>
    );
  }
}
