import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { Grid } from "semantic-ui-react";

export default function SiteWrapper(props) {
  return (
    <React.Fragment>
      <SiteHeader />
      <SiteNav />

      <Grid columns={16}>
        <Grid.Row>
          <Grid.Column width={16}>
            <main className="ui container">{props.children}</main>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <SiteFooter />
    </React.Fragment>
  );
}
