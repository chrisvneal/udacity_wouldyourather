import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class LeaderBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h1" content="Leader Board" />
      </React.Fragment>
    );
  }
}