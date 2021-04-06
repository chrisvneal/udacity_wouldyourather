import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error">
        <div className="error-message">
          <h1>404</h1>
          <p>Sorry - we can't find that page!</p>
        </div>
      </div>
      <nav>
        <Link to="/">Return to Login</Link>
      </nav>
    </div>
  );
}
