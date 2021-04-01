import React, { Component } from "react";
import PollCard from "./PollCard";
import { saveOption } from "../../actions/options";
import { _saveQuestionAnswer } from "../../apis/_DATA";

import { connect } from "react-redux";
// import { Progress } from "semantic-ui-react";
// import { Header } from "semantic-ui-react";

class PollResults extends Component {
  selectOption = (e, poll_option, callback, id) => {
    // get the current target
    let target = e.currentTarget;

    // if it has a next sibling, remove it
    if (target.nextElementSibling) {
      target.nextElementSibling.style.display = "none";
    } else {
      // if no next sibling, remove the previous sibling
      target.previousElementSibling.style.display = "none";
    }

    // add selectedOption class to chosen component
    target.classList.add("selectedOption");

    // console.log(document.querySelector(".poll-results h2").innerText);
    document.querySelector(".poll-results h2").innerText =
      "You Would Rather...";

    let vote = {
      authedUser: this.props.authedUser,
      qid: this.props.result,
      answer: poll_option,
    };

    // console.log("vote: ", vote);

    // console.log("user answered", this.props.userAnswered);

    // console.log();

    //     if (result ===  ) {
    // return;
    //     } else {
    //       this.props.handleSaveOption(vote);
    //     }

    !this.props.userAnswered.includes(this.props.result) &&
      this.props.handleSaveOption(vote);
  };

  render() {
    // console.log("questions: ", this.props.questions);
    // console.log("id: ", this.props.result);

    const { questions, result } = this.props;
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
              key={option.text}
              question={option.text}
              id={result}
              option={option.name}
              selectOption={(e) => {
                this.selectOption(e, option.name, result);
              }}
            />
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

const mapStateToProps = ({ authedUser, users }) => {
  return {
    userAnswered: Object.keys(users[authedUser.id].answers),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollResults);
