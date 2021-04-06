import "./index.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeaderBoard from "./Components/Pages/LeaderBoard";
import CreatePoll from "./Components/Pages/CreatePoll";
import UserProfile from "./Components/Pages/UserProfile";
import Polls from "./Components/Pages/Polls";
// import ErrorPage from "./Components/Pages/ErrorPage";
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

  handleLogout = () => {
    if (this.props.authedUser) {
      return <Polls />;
    } else {
      return <Login />;
    }
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
                  <Route path="/" exact render={this.handleLogout} />
                  <Route path="/add" component={CreatePoll} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/user_profile" component={UserProfile} />
                  <Route path="/:id" component={PollDetails} />
                  {/* <Route path={"/ErrorPage"} component={ErrorPage} /> */}
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
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
