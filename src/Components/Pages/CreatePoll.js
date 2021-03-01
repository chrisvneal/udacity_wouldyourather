import React, { Component } from "react";
import { Header, Form, Checkbox, Button } from "semantic-ui-react";

export default class CreatePoll extends Component {
  render() {
    return (
      <div>
        <Header as="h2" content="Create A Poll" />

        <Form>
          <Form.Field>
            <p>Create two options for your poll, make it fun!</p>
            <Header as="h2" content="Would You Rather...?" />
            <label>...Option 1</label>
            <input placeholder="Option 1" />
          </Form.Field>
          <Form.Field>
            <label>...Option 2</label>
            <input placeholder="Option 2" />
          </Form.Field>
          <Button type="submit">Create Poll</Button>
        </Form>
      </div>
    );
  }
}
