import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SiteHeader extends Component {
  render() {
    return (
      <header id="Header">
        <Container>
          <div>
            <Header as="h1" content="Would You Rather?" />
            <img src="https://via.placeholder.com/100X100" alt="logo" />
          </div>
          <nav>
            <ul>
              <Link to="/">
                <li>Polls</li>
              </Link>
              <Link to="/add">
                <li>Create A Poll</li>
              </Link>
              <Link to="/leaderboard">
                <li>LeaderBoard</li>
              </Link>
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
