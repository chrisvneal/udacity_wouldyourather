import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";

export default class SiteHeader extends Component {
  render() {
    return (
      <header className="site-header">
        <Container>
          <div className="header-brand">
            <Header as="h1" content="Would You Rather?" />
            <ProfileHeader />
          </div>
        </Container>
      </header>
    );
  }
}
