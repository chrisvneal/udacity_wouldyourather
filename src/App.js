import "./index.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./Components/Site/SiteHeader";
import SiteFooter from "./Components/Site/SiteFooter";
import LeaderBoard from "./Components/Pages/LeaderBoard";
import CreatePoll from "./Components/Pages/CreatePoll";
import UserProfile from "./Components/Pages/UserProfile";
import Polls from "./Components/Pages/Polls";
import Login from "./Components/Pages/Login";
import PollDetails from "./Components/Pages/PollDetails";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <LoadingBar />
          <Grid columns={16}>
            {/* Site header */}
            <Grid.Row>
              <Grid.Column width={16}>
                <SiteHeader />
              </Grid.Column>
            </Grid.Row>

            {/* Main */}
            <Grid.Row>
              <Grid.Column width={16}>
                <main className="ui container">
                  <Switch>
                    <Route path="/" exact component={Polls} />
                    <Route path="/add" component={CreatePoll} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route path="/user_profile" component={UserProfile} />
                    <Route path="/poll_details" component={PollDetails} />
                    <Route path="/user_login" component={Login} />
                  </Switch>
                  {/* <Route path="/poll_id" component={CreatePoll} /> */}
                </main>
              </Grid.Column>
            </Grid.Row>

            {/* Footer */}
            <Grid.Row>
              <Grid.Column width={16}>
                <SiteFooter />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
