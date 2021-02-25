import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Header extends Component {
  render() {
    return (
      <header id="Header">
        <Container>
          <div>
            <h1>Would You Rather?</h1>
            <img src="https://via.placeholder.com/100X100" alt="logo" />
          </div>
          <nav>
            <ul>
              <li>Polls</li>
              <li>Create A Poll</li>
              <li>Leaderboard</li>
              <li>Sign In/Outs</li>
              {/* Make sign in/out dynamic based on whether signed in */}
            </ul>
          </nav>
          <div>
            <img src="https://via.placeholder.com/50x50" alt="logo" />
            <p>Username</p>
          </div>
        </Container>
      </header>
    );
  }
}
