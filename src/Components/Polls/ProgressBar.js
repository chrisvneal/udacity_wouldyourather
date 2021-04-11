import React from "react";
import { Progress } from "semantic-ui-react";

export default function ProgressBar(props) {
  //     return <Progress
  //     value={this.getTotalOptionVotes(
  //       questions,
  //       result,
  //       this.chosenOption()
  //     )}
  //     />

  return (
    <Progress className="poll-progress" percent={50} progress>
      <p>
        <span className="user-info-number">{`${props.optionVoteCount}`}</span>{" "}
        option votes out of{" "}
        <span className="user-info-number">{`${props.pollVoteCount}`}</span>
        poll votes
      </p>
    </Progress>
  );
}
