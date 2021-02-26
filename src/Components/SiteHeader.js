import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import SiteNav from "./SiteNav";

export default class SiteHeader extends Component {
  render() {
    return (
      <header id="Header">
        <Container>
          <div>
            <Header as="h1" content="Would You Rather?" />
            <img src="https://via.placeholder.com/100X100" alt="logo" />
          </div>

          <SiteNav />

          <div>
            <img src="https://via.placeholder.com/50x50" alt="logo" />
            <p>Username</p>
          </div>
        </Container>
      </header>
    );
  }
}
