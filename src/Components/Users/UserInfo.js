import React from "react";
import { Icon } from "semantic-ui-react";

export default function UserInfo(props) {
  return (
    <div className="user-info">
      <div className="user-info-header">
        <p>
          <Icon name="user circle" size="huge" />
          <span className="user-info-author">{props.author}</span>
        </p>
      </div>
      <div className="user-info-body">
        <p>
          <span className="user-info-number">{props.created}</span>
          <span className="user-info-text">
            questions <strong>created</strong>
          </span>
        </p>
        <p>
          <span className="user-info-number">{props.answered}</span>
          <span className="user-info-text">
            questions <strong>answered</strong>
          </span>
        </p>
      </div>
    </div>
  );
}
