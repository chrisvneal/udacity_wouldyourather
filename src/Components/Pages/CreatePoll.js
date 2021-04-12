import React, { Component } from "react";
import { Header, Form, Button, Divider } from "semantic-ui-react";
import SiteWrapper from "../Site/SiteWrapper";
import { saveQuestion } from "../../actions/questions";
import { _saveQuestion } from "../../apis/_DATA";
import { connect } from "react-redux";

class CreatePoll extends Component {
  handleChange = (e) => {
    return {
      optionOneText: e.target.optionOneText.value,
      optionTwoText: e.target.optionTwoText.value,
      author: this.props.authedUser
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // get and use state
    let question = this.handleChange(e);

    e.target.optionOneText.value = "";
    e.target.optionTwoText.value = "";

    this.props.saveQuestion(question);
    this.props.history.push("/");
  };

  render() {
    console.clear();
    console.log("PollCard props: ", this.props);
    return (
      <SiteWrapper>
        <div className="create-poll">
          <Header as="h2" content="Create A Poll" />
          <p>Create two options for your poll, make it fun!</p>
          <Header as="h3" content="Would You Rather...?" />
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Option 1</label>
              <input placeholder="...be a superhero" id="optionOneText" />
            </Form.Field>
            <Divider horizontal>
              <span className="or">or</span>
            </Divider>
            <Form.Field>
              <label>Option 2</label>
              <input placeholder="...be a super villian" id="optionTwoText" />
            </Form.Field>
            <Button type="submit">Create Poll</Button>
          </Form>
        </div>
      </SiteWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveQuestion: (question) => {
      dispatch(saveQuestion(question));
      return _saveQuestion(question).catch((e) => {
        console.warning("There is an error with saveQuestion function: ", e);
      });
    }
  };
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
