import React from "react";
import { Icon } from "semantic-ui-react";

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      {/* <img src="https://via.placeholder.com/50x50" alt="logo" /> */}
      <Icon name="user circle" size={"big"} />
      <p className="username">Username</p>
    </div>
  );
}
