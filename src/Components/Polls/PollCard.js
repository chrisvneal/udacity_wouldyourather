import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function PollCard({ id, userAnswered, question, author, likes, selectOption }) {
  // if id of this card is in the list of users answers, this card should have the style of .asnwered
  // console.log("card id: ", id);

  return (
    // <Card onClick={props.selectOption}>
    <Card
      as={"div"}
      onClick={userAnswered.includes(id) ? null : selectOption}
      className={userAnswered.includes(id) ? "answered" : null}>
      <Link
        to={{
          pathname: `${id}`,
        }}>
        <Card.Content className="header">Would You Rather...?</Card.Content>
        <Card.Content className="option">{question}</Card.Content>
        <Card.Content className="footer">
          <p className="poll-card-author">{author}</p>
          <p className="poll-card-likes">{likes}</p>
        </Card.Content>
      </Link>
    </Card>
  );
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    userAnswered: Object.keys(users[authedUser.id].answers),
  };
};

export default connect(mapStateToProps)(PollCard);
