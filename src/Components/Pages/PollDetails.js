import React, { Component } from "react";
import { Header, Grid } from "semantic-ui-react";
import UserInfo from "../UserInfo";

export default class PollDetails extends Component {
  render() {
    return (
      <div className="poll-details">
        <Header as="h2" content="Poll Details" dividing />
        <Grid width={16}>
          <Grid.Row columns={3}>
            <Grid.Column width={5}>
              <Header as="h3" content="Created by" />
              <UserInfo />
            </Grid.Column>
            <Grid.Column width={11}>column</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
