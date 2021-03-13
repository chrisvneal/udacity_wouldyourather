import React from "react";
import { connect } from "react-redux";
// import { Icon } from "semantic-ui-react";

function ProfileHeader(props) {
  return (
    <div className="profile-header">
      {/* <img src="https://via.placeholder.com/50x50" alt="logo" /> */}
      {/* <Icon name="user circle" size={"big"} /> */}
      <div class="header-avatar">
        <img src={props.avatar} alt="user avatar" />
      </div>
      <p className="username">{props.username}</p>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  console.log("users", users[authedUser.id], authedUser.id);
  return {
    avatar: users[authedUser.id].avatarURL,
    username: authedUser.id,
  };
}

export default connect(mapStateToProps)(ProfileHeader);
