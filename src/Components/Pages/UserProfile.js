import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import SiteWrapper from "../Site/SiteWrapper";

export default class UserProfile extends Component {
  render() {
    return (
      <SiteWrapper>
        <div>
          <Header as="h2" content="User Profile" />
        </div>
      </SiteWrapper>
    );
  }
}
