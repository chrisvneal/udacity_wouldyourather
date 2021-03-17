import React, { Component } from "react";
import { Header, Grid } from "semantic-ui-react";
import PollResults from "../Polls/PollResults";
import UserInfo from "../Users/UserInfo";
import SiteWrapper from "../Site/SiteWrapper";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

class PollDetails extends Component {
  render() {
    const id = this.props.match.params;
    console.clear();
    console.log("ID: ", id);
    return (
      <SiteWrapper>
        <div className="poll-details">
          <Header as="h2" content="Poll Details" />
          <Grid width={16}>
            <Grid.Row columns={3}>
              <Grid.Column width={5}>
                <Header as="h3" content="Created by" />
                <UserInfo />
              </Grid.Column>
              <Grid.Column width={11}>
                <PollResults result={id} questions={this.props.questions} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </SiteWrapper>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(PollDetails);
