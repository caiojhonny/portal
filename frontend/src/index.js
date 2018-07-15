import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// PWA Services
import registerServiceWorker from "./_services/registerServiceWorker";

import { Home, Page } from "./pages";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/page2" component={Page} />
    </div>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
