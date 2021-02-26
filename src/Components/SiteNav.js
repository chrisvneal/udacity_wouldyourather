import React from "react";
import { Link } from "react-router-dom";

export default function SiteNav() {
  return (
    <nav className="site-nav">
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
        <li>Sign In/Out</li>
        {/* Make sign in/out dynamic based on whether signed in */}
      </ul>
    </nav>
  );
}