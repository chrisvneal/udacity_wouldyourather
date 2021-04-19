import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Dropdown, Container } from "semantic-ui-react";
import { setAuthedUser } from "../../actions/authedUser";
import { users } from "../../apis/helpers";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    redirecting: false,
  };

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
    this.setState({
      redirecting: true,
    });
  };

  render() {
    const { redirecting } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (redirecting) {
      return <Redirect to={from} />;
    }
    return (
      <Container>
        <div className="login">
          <h2>
            Login to <span>Would You Rather?</span>
          </h2>
          <Form onSubmit={this.setUser}>
            <Form.Field>
              <Dropdown
                id="user_select"
                placeholder="Select user"
                fluid
                selection
                options={users}
              />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
