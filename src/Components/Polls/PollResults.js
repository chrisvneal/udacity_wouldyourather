import React, { Component } from "react";
import PollCard from "./PollCard";
import { saveOption } from "../../actions/options";
import { _saveQuestionAnswer } from "../../apis/_DATA";
import { generateKey } from "../../apis/helpers";
import ProgressBar from "./ProgressBar";

import { connect } from "react-redux";
// import { Header } from "semantic-ui-react";

class PollResults extends Component {
  /* if the poll result has been answered show the progress bar with the new details */

  state = {
    answered: false,
    chosen: "",
  };

  /* if the poll result has been answered show the progress bar with the new details */

  selectOption = (e, poll_option) => {
    console.clear();
    console.info("option selected");
    // this.chosenOption(poll_option);
    // get the current target
    let target = e.currentTarget;

    // if it has a next sibling, remove it
    if (target.nextElementSibling) {
      target.nextElementSibling.style.display = "none";
    } else {
      // if no next sibling, remove the previous sibling
      target.previousElementSibling.style.display = "none";
    }

    document.querySelector(".poll-results h2").innerText =
      "You Would Rather...";

    // document.querySelector(".poll-progress.hidden").classList.remove("hidden");

    this.setState({
      answered: true,
      chosen: poll_option,
    });

    let vote = {
      authedUser: this.props.authedUser,
      qid: this.props.result,
      answer: poll_option,
    };

    !this.props.userAnswered.includes(this.props.result) &&
      this.props.handleSaveOption(vote);
  };

  getTotalOptionVotes = (questions, result, option) => {
    // console.log(questions, result);
    let optionVotes = questions[result][option].votes.length;

    return optionVotes;
  };

  chosenOption = (option) => {
    console.log("chosen option: ", option);
    return option;
  };

  render() {
    // console.clear();
    console.log("Poll answered: ", this.state);
    // console.log("Poll answered: ", this.state.answered ? "yes" : "no");
    const { questions, result, usersWhoVoted } = this.props;
    const optionOne = {
      name: "optionOne",
      text: questions[result].optionOne.text,
    };
    const optionTwo = {
      name: "optionTwo",
      text: questions[result].optionTwo.text,
    };
    const options = [optionOne, optionTwo];
    return (
      <div className="poll-results">
        <h2 className="center">Would You Rather...?</h2>
        <div className="poll-results-cards">
          {options.map((option) => (
            <PollCard
              key={generateKey(7)}
              question={option.text}
              id={result}
              option={option.name}
              selectOption={(e) => {
                this.selectOption(e, option.name, result);
              }}
            />
          ))}
        </div>

        {/* if the poll result has been answered show the progress bar with the new details  */}

        {this.state.answered ? (
          <ProgressBar
            pollVoteCount={usersWhoVoted.length}
            optionVoteCount="6"
          />
        ) : null}

        <div className="users-who-voted">
          <span className="heading">Poll votes:</span>
          <span className="users">{this.props.usersWhoVoted.join(", ")}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveOption: (option) => {
      dispatch(saveOption(option));

      return _saveQuestionAnswer(option).catch((e) => {
        console.warn("Error in handleSaveOption: ", e);
      });
    },
  };
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    userAnswered: Object.keys(users[authedUser.id].answers),
    questions,
    authedUser: authedUser.id,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollResults);
