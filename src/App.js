import "./index.scss";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LeaderBoard from "./Components/Pages/LeaderBoard";
import CreatePoll from "./Components/Pages/CreatePoll";
import ErrorPage from "./Components/Pages/ErrorPage";

import Polls from "./Components/Pages/Polls";
import Login from "./Components/Pages/Login";
import PollDetails from "./Components/Pages/PollDetails";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";

let appAuth = {
  authenticated: false,
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      appAuth.authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    if (this.props.authedUser) {
      appAuth.authenticated = true;
    }

    return (
      <Router>
        <div className="App">
          <LoadingBar />

          {/* Main */}
          <Grid columns={16}>
            <Grid.Row>
              <Grid.Column width={16}>
                <Switch>
                  <PrivateRoute path="/" exact component={Polls} />
                  <PrivateRoute path="/add" component={CreatePoll} />
                  <PrivateRoute path="/leaderboard" component={LeaderBoard} />
                  <PrivateRoute path="/questions/:id" component={PollDetails} />
                  <Route to="/login" component={Login} />
                  <Route to="/error" component={ErrorPage} />
                </Switch>
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
