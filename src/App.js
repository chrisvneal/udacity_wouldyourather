import "./index.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./Components/SiteHeader";
import SiteFooter from "./Components/SiteFooter";
import LeaderBoard from "./Components/Pages/LeaderBoard";
import CreatePoll from "./Components/Pages/CreatePoll";
import UserProfile from "./Components/Pages/UserProfile";
import Polls from "./Components/Pages/Polls";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SiteHeader />

          <Switch>
            <Route path="/" exact component={Polls} />
            <Route path="/add" component={CreatePoll} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/user" component={UserProfile} />
          </Switch>

          {/* <Route path="/poll_id" component={CreatePoll} /> */}

          <SiteFooter />
        </div>
      </Router>
    );
  }
}
