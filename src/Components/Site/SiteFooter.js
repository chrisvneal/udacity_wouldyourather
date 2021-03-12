import React from "react";
import { Container } from "semantic-ui-react";

export default function SiteFooter() {
  return (
    <footer className="center">
      <Container>
        {/* <Header as="h2" content="Footer" /> */}
        <p>
          project developed for
          <a href="http://www.udacity.com" target="_blank" rel="noreferrer">
            <b>Udacity React Nanodegree</b>
          </a>{" "}
          |{" "}
          <span>
            <a
              href="https://github.com/chrisvneal"
              rel="noreferrer"
              target="_blank">
              Chris V. Neal
            </a>{" "}
            &copy; 2021
          </span>
        </p>
      </Container>
    </footer>
  );
}
