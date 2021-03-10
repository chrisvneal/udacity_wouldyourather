import React, { Component } from "react";
import { Header, Form, Checkbox, Button, Dropdown } from "semantic-ui-react";

export default class Login extends Component {
  render() {
    let friendOptions = [
      {
        key: "Jenny Hess",
        text: "Jenny Hess",
        value: "Jenny Hess",
        image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
      },
      {
        key: "Elliot Fu",
        text: "Elliot Fu",
        value: "Elliot Fu",
        image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
      },
      {
        key: "Stevie Feliciano",
        text: "Stevie Feliciano",
        value: "Stevie Feliciano",
        image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
      },
    ];
    return (
      <div>
        <Header as="h2" content="Login" />
        <Form>
          <Form.Field>
            <label>Select user</label>
            <Dropdown
              placeholder="Select user"
              fluid
              selection
              options={friendOptions}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Remember me" />
          </Form.Field>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}
