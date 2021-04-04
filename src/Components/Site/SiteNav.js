import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function SiteNav() {
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
          <Link to="/">
            <li>Sign In/Out</li>
          </Link>
          {/* Make sign in/out dynamic based on whether signed in */}
        </ul>
      </Container>
    </nav>
  );
}
