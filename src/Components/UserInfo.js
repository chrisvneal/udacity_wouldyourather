import React from "react";
import { Icon } from "semantic-ui-react";

export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-info-header">
        <p>
          <Icon name="user circle" size="huge" />
          <span className="user-info-author">author_name</span>
        </p>
      </div>
      <div className="user-info-body">
        <p>
          <span className="user-info-number">5</span>
          <span className="user-info-text">
            questions <strong>created</strong>
          </span>
        </p>
        <p>
          <span className="user-info-number">10</span>
          <span className="user-info-text">
            questions <strong>answered</strong>
          </span>
        </p>
      </div>
    </div>
  );
}
