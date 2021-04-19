import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { logOutAuthedUser } from "../../actions/authedUser";

function SiteNav(props) {
  const logout = () => {
    props.dispatch(logOutAuthedUser());
  };
  return (
    <nav className="site-nav">
      <Container>
        <ul>
          <Link to="/">
            <li>Polls</li>
          </Link>
          <Link to="/add">
            <li>Create A Poll</li>
          </Link>
          <Link to="/leaderboard">
            <li>Leader Board</li>
          </Link>

          <Link to="/login">
            <li onClick={logout} className="asLink blue">
              Sign Out
            </li>
          </Link>
        </ul>
      </Container>
    </nav>
  );
}

export default connect()(SiteNav);
