import "./index.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  checkLogin = () => {
    console.clear();
    console.log("authedUser:", this.props.authedUser.loggedIn);
    console.log(this);
    // if (this.props.authedUser.loggedIn) {
    //   return <Login />;
    // } else {
    //   return <PollDetails />;
    // }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <LoadingBar />

          {/* Main */}
          <Grid columns={16}>
            <Grid.Row>
              <Grid.Column width={16}>
                <Switch>
                  <Route
                    path="/"
                    exact
                    component={() => {
                      if (this.props.authedUser) {
                        return <Polls />;
                      } else {
                        return <Login />;
                      }
                    }}
                  />
                  <Route path="/add" component={CreatePoll} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/user_profile" component={UserProfile} />
                  <Route path="/:id" render={this.checkLogin} />
                  <Route path="/user_login" component={Login} />
                </Switch>
                {/* <Route path="/poll_id" component={CreatePoll} /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  // console.log("mappin state");
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
