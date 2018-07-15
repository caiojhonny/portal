import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Page extends Component {
  render() {
    return (
      <Fragment>
        <h2>page</h2>
        <Link to="/">Home</Link>
      </Fragment>
    );
  }
}

export default Page;
