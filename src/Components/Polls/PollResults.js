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
    selectedOption: "",
  };

  getState = () => {
    return this.state;
  };

  /* if the poll result has been answered show the progress bar with the new details */

  updateState = (answered, selectedOption) => {
    this.setState({
      answered,
      selectedOption,
    });
  };

  selectOption = (e, poll_option) => {
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

    this.updateState(true, poll_option);

    let vote = {
      authedUser: this.props.authedUser,
      qid: this.props.result,
      answer: poll_option,
    };

    !this.props.userAnswered.includes(this.props.result) &&
      this.props.handleSaveOption(vote);
  };

  getOptionVotes = (questions, result, selectedOption) => {
    let optionVotes = questions[result][selectedOption].votes.length;

    return optionVotes;
    // return 7;
  };

  getSelectedOption = () => {
    return this.state.selectedOption;
  };

  componentDidMount = () => {
    // when component mounts, check to see if the answer has answered the poll. If she has, update the component's state to include the option that was selected
    if (this.props.userAnswered.includes(this.props.result)) {
      this.updateState(
        true,
        this.props.users[this.props.authedUser].answers[this.props.result]
      );
    }
  };

  render() {
    /* 
    look through the list of questions, 
    
    if it has been answered then update state to reflect that this poll has been answered,
    
    show its corresponding ProgressBar 
    */
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
            optionVoteCount={this.getOptionVotes(
              questions,
              result,
              this.getSelectedOption()
            )}
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
    users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollResults);
