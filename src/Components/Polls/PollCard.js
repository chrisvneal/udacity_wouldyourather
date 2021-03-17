import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PollCard(props) {
  return (
    <Link
      to={{
        pathname: `${props.id}`,
      }}>
      <Card>
        <Card.Content className="header">Would You Rather...?</Card.Content>
        <Card.Content className="option">{props.question}</Card.Content>
        <Card.Content className="footer">
          <p className="poll-card-author">{props.author}</p>
          <p className="poll-card-likes">{props.likes}</p>
        </Card.Content>
      </Card>
    </Link>
  );
}
