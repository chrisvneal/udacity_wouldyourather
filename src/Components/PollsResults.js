import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class PollsResults extends Component {
  render() {
    return (
      <div className="poll-results">
        <Card>
          <Card.Content>Would You Rather</Card.Content>
          <Card.Content>Option</Card.Content>
        </Card>

        <Card>
          <Card.Content>Would You Rather</Card.Content>
          <Card.Content>Option</Card.Content>
        </Card>

        <Card>
          <Card.Content>Would You Rather</Card.Content>
          <Card.Content>Option</Card.Content>
        </Card>
      </div>
    );
  }
}
