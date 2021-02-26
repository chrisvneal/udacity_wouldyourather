import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import SiteNav from "./SiteNav";
import ProfileHeader from "./ProfileHeader";

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

          <ProfileHeader />
        </Container>
      </header>
    );
  }
}
