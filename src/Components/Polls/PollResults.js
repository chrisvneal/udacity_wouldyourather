import React, { Component } from "react";
import PollCard from "./PollCard";
// import { Progress } from "semantic-ui-react";
// import { Header } from "semantic-ui-react";

export default class PollResults extends Component {
  render() {
    // console.log("questions: ", this.props.questions);
    // console.log("id: ", this.props.result);

    const { questions, result } = this.props;
    const optionOne = questions[result].optionOne.text;
    const optionTwo = questions[result].optionTwo.text;
    const options = [optionOne, optionTwo];
    return (
      <div className="poll-results">
        <h2 className="center">Would You Rather...?</h2>
        <div className="poll-results-cards">
          {options.map((option) => (
            <PollCard key={option} question={option} id={result} />
          ))}

          {/* <PollCard /> */}
        </div>
        {/* <Progress
          value="2"
          total="4"
          progress="percent"
          className="poll-progress">
          2 out of 4 people voted
        </Progress> */}
        <div className="users-who-voted">
          <span className="heading">users who voted:</span>
          <span className="users">chrisvneal, caese_for_prez</span>
        </div>
      </div>
    );
  }
}
