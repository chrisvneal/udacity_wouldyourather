import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Form, Button, Dropdown } from "semantic-ui-react";
import { setAuthedUser } from "../../actions/authedUser";

class Login extends Component {
  users = [
    {
      key: "tylermcginnis",
      text: "Tyler McGinnis",
      value: "tylermcginnis",
      image: {
        avatar: true,
        src:
          "https://www.clipartmax.com/png/middle/90-901643_our-team-avatar-super-hero.png",
      },
    },
    {
      key: "sarahedo",
      text: "Sarah Edo",
      value: "sarahedo",
      image: {
        avatar: true,
        src:
          "https://www.clipartmax.com/png/middle/169-1690318_super-hero-avatar-png.png",
      },
    },
    {
      key: "johndoe",
      text: "John Doe",
      value: "johndoe",
      image: {
        avatar: true,
        src:
          "https://www.clipartmax.com/png/middle/56-563494_thank-you-flat-design-hero-avatars-marvel-characters.png",
      },
    },
  ];
  setUser = (e) => {
    e.preventDefault();
    const user_select = document.querySelector(".login .divider.text");
    let user = user_select.innerText;

    switch (user) {
      case "Sarah Edo":
        user = "sarahedo";
        break;

      case "Tyler McGinnis":
        user = "tylermcginnis";
        break;

      case "John Doe":
        user = "johndoe";
        break;

      default:
        return null;
    }

    this.props.dispatch(setAuthedUser(user));
  };

  render() {
    return (
      <div className="login">
        <Header as="h2" content="Login" />
        <Form onSubmit={this.setUser}>
          <Form.Field>
            <Dropdown
              id="user_select"
              placeholder="Select user"
              fluid
              selection
              options={this.users}
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

export default connect()(Login);
