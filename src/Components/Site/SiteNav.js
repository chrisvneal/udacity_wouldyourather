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

          <li onClick={logout} className="asLink blue">
            Sign In/Out
          </li>

          {/* Make sign in/out dynamic based on whether signed in */}
        </ul>
      </Container>
    </nav>
  );
}

// const mapStateToProps = ({ authedUser }) => {
//   return {
//     authedUser: authedUser.id,
//   };
// };

export default connect()(SiteNav);
