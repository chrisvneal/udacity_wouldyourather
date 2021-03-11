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
        src: "/images/cap_america.png",
      },
    },
    {
      key: "sarahedo",
      text: "Sarah Edo",
      value: "sarahedo",
      image: {
        avatar: true,
        src: "/images/wonder_woman",
      },
    },
    {
      key: "johndoe",
      text: "John Doe",
      value: "johndoe",
      image: {
        avatar: true,
        src: "/images/robin_hood.png",
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
    console.log("users: ", this.props.users["sarahedo"]);
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

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
