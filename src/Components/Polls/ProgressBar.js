import React from "react";
import { Progress } from "semantic-ui-react";

export default function ProgressBar(props) {
  //     return <Progress
  //     value={this.getTotalOptionVotes(
  //       questions,
  //       result,
  //       this.chosenOption()
  //     )}
  //     total={props.usersWhoVoted.length}
  //     progress="percent">
  //     {`2 out of ${props.usersWhoVoted.length} people voted`}
  //   </Progress>

  return (
    <Progress className="poll-progress" percent={50} progress>
      <p> 2 out of {`${props.usersWhoVoted.length}`} people voted</p>
    </Progress>
  );
}
