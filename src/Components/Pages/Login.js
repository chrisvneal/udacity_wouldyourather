import React, { Component } from "react";
import { Header, Form, Checkbox, Button, Dropdown } from "semantic-ui-react";

export default class Login extends Component {
  render() {
    let friendOptions = [
      {
        key: "tylermcginnis",
        text: "Tyler McGinnis",
        value: "tylermcginnis",
        image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
      },
      {
        key: "Elliot Fusarahedo",
        text: "Sarah Edo",
        value: "Elliot Fusarahedo",
        image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
      },
      {
        key: "johndoe",
        text: "John Doe",
        value: "johndoe",
        image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
      },
    ];

    const test = (e) => {
      e.preventDefault();
      const user_select = document.querySelector(".login .divider.text");
      let value = user_select.innerText;

      switch (value) {
        case "Sarah Edo":
          value = "sarahedo";
          break;

        case "Tyler McGinnis":
          value = "tylermcginnis";
          break;

        case "John Doe":
          value = "johndoe";
          break;

        default:
          return null;
      }

      console.log("user: ", value);
    };
    return (
      <div className="login">
        <Header as="h2" content="Login" />
        <Form onSubmit={test}>
          <Form.Field>
            <Dropdown
              id="user_select"
              placeholder="Select user"
              fluid
              selection
              options={friendOptions}
            />
          </Form.Field>
          {/* <Form.Field>
            <Checkbox label="Remember me" />
          </Form.Field> */}
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}
