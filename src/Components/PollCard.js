import React from "react";
import { Card } from "semantic-ui-react";

export default function PollCard() {
  return (
    <React.Fragment>
      <Card>
        <Card.Content className="header">Would You Rather...?</Card.Content>
        <Card.Content className="option">Option</Card.Content>
        <Card.Content className="footer">
          <p>author</p>
          <p>5</p>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
