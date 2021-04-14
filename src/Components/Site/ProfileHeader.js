import React from "react";
import { connect } from "react-redux";
// import { Icon } from "semantic-ui-react";

function ProfileHeader(props) {
  return (
    <div className="profile-header">
      <div className="header-avatar">
        <img src={props.avatar} alt="user avatar" />
      </div>
      <p className="username">{props.username}</p>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    username: authedUser.id,
  };
}

export default connect(mapStateToProps)(ProfileHeader);
