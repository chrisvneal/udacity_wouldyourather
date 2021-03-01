import React, { Component } from "react";
import { Header, Form, Checkbox, Button } from "semantic-ui-react";

export default class CreatePoll extends Component {
  render() {
    return (
      <div>
        <Header as="h2" content="Create A Poll" />

        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
