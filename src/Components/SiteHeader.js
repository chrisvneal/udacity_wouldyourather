import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import SiteNav from "./SiteNav";

export default class SiteHeader extends Component {
  render() {
    return (
      <header className="site-header">
        <Container>
          <div className="header-brand">
            <Header as="h1" content="Would You Rather?" />
            {/* <img src="https://via.placeholder.com/100X100" alt="logo" /> */}
            <ProfileHeader />
          </div>

          <SiteNav />
        </Container>
      </header>
    );
  }
}
