import "./index.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./Components/SiteHeader";
import Login from "./Components/Pages/Login";
import LeaderBoard from "./Components/Pages/LeaderBoard";
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

          <Route path="/polls" component={Polls} />
          <Route path="/add" component={CreatePoll} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/user" component={UserProfile} />

          {/* <Route path="/poll_id" component={CreatePoll} /> */}
        </div>
      </Router>
    );
  }
}
