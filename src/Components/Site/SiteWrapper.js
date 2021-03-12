import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

export default function SiteWrapper() {
  return (
    <React.Fragment>
      <SiteHeader />
      <SiteNav />
      {this.props.children}
      <SiteFooter />
    </React.Fragment>
  );
}
