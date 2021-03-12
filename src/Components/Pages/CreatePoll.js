import React, { Component } from "react";
import { Header, Form, Button } from "semantic-ui-react";
import SiteWrapper from "../Site/SiteWrapper";

export default class CreatePoll extends Component {
  render() {
    return (
      <SiteWrapper>
        <div className="create-poll">
          <Header as="h2" content="Create A Poll" />
          <p>Create two options for your poll, make it fun!</p>
          <Header as="h3" content="Would You Rather...?" />
          <Form>
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
