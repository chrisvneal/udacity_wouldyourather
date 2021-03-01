import React, { Component } from "react";

export default class PollsResults extends Component {
  render() {
    const { type } = this.props;
    return <div>{type}</div>;
  }
}
