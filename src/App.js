import "./index.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./Components/SiteHeader";
import Login from "./Components/Pages/Login";
import Leaderboard from "./Components/Pages/Leaderboard";
import CreatePoll from "./Components/Pages/CreatePoll";
import UserProfile from "./Components/Pages/UserProfile";
import PollDetails from "./Components/Pages/PollDetails";
import Polls from "./Components/Pages/Polls";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SiteHeader />
          <Login />
          <Polls />
          <CreatePoll />
          <Leaderboard />
          <UserProfile />
          <PollDetails />
        </div>
      </Router>
    );
  }
}
