import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h2>Home page</h2>
        <Link to="/page2">Page 2</Link>
      </Fragment>
    );
  }
}

export default Home;
