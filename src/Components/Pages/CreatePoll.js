import React, { Component } from "react";
import { Header, Form, Button } from "semantic-ui-react";
import SiteWrapper from "../Site/SiteWrapper";
import { saveQuestion } from "../../actions/questions";
import { _saveQuestion } from "../../apis/_DATA";
import { connect } from "react-redux";

class CreatePoll extends Component {
  render() {
    const handleSaveQuestion = (e) => {
      e.preventDefault();
      console.log("question handled");
      // this.props.saveQuestion(question);
    };
    return (
      <SiteWrapper>
        <div className="create-poll">
          <Header as="h2" content="Create A Poll" />
          <p>Create two options for your poll, make it fun!</p>
          <Header as="h3" content="Would You Rather...?" />
          <Form onSubmit={handleSaveQuestion}>
            <Form.Field>
              <label>Option 1</label>
              <input placeholder="...be a superhero" />
            </Form.Field>
            <span className="or">or</span>
            <Form.Field>
              <label>Option 2</label>
              <input placeholder="...be a super villian" />
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
    },
  };
};

export default connect(null, mapDispatchToProps)(CreatePoll);
