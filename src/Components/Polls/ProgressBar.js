import React from "react";
import { Progress } from "semantic-ui-react";

export default function ProgressBar({ optionVoteCount, pollVoteCount }) {
  //     return <Progress
  //     value={this.getTotalOptionVotes(
  //       questions,
  //       result,
  //       this.chosenOption()
  //     )}
  //     />

  const calculateVotePercentage = (options, votes) => {
    let calculation = (options / votes) * 100;

    return calculation.toFixed(0);
  };

  return (
    <Progress
      className="poll-progress"
      percent={calculateVotePercentage(optionVoteCount, pollVoteCount)}
      progress>
      <p>
        <span className="user-info-number">{`${optionVoteCount}`}</span>
        option votes out of{" "}
        <span className="user-info-number">{`${pollVoteCount}`}</span>
        poll votes
      </p>
    </Progress>
  );
}
