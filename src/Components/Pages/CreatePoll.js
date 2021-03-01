import React, { Component } from "react";
import { Header, Form, Button } from "semantic-ui-react";

export default class CreatePoll extends Component {
  render() {
    return (
      <div className="create-poll">
        <Header as="h2" content="Create A Poll" dividing />

        <Form>
          <Form.Field>
            <p>Create two options for your poll, make it fun!</p>
            <Header as="h3" content="Would You Rather...?" />
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
    );
  }
}
