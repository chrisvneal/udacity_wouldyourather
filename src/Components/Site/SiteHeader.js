import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";

class SiteHeader extends Component {
  render() {
    return (
      <header className="site-header">
        <Container>
          <div className="header-brand">
            <Header as="h1" content="Would You Rather?" />
            <ProfileHeader avatar={this.props.userAvatar} />
          </div>
        </Container>
      </header>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    userAvatar: users[authedUser.id].avatarURL,
  };
};

export default connect(mapStateToProps)(SiteHeader);
