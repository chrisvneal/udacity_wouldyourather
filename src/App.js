import "./index.scss";
import React, { Component } from "react";
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
      <div>
        <SiteHeader />
        <Login />
        <Polls />
        <CreatePoll />
        <Leaderboard />
        <UserProfile />
        <PollDetails />
      </div>
    );
  }
}
