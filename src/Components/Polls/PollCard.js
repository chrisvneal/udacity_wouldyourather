import React from "react";
import { Card } from "semantic-ui-react";

export default function PollCard(props) {
  return (
    <Card className={props.size}>
      <Card.Content className="header">Would You Rather...?</Card.Content>
      <Card.Content className="option">Option</Card.Content>
      <Card.Content className="footer">
        <p className="poll-card-author">author</p>
        <p className="poll-card-likes">5</p>
      </Card.Content>
    </Card>
  );
}
