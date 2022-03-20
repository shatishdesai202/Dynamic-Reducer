import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Records from "./routes/Records";

const App = () => (
  <Router>
    <Fragment>
      <nav>
        code-credit - https://tylergaw.com/blog/dynamic-redux-reducers/
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/records">
              Records{" "}
              <small>
                (click here for one weird trick that will add dynamic reducer)
              </small>
            </Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/records" component={Records} />

      <footer
        style={{
          borderTop: "1px solid silver",
          marginTop: "2rem",
          paddingTop: "2rem",
        }}
      >
        <a href="https://codesandbox.io/s/qk3n9xmm3w">
          <img
            alt="Edit qk3n9xmm3w"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>
      </footer>
    </Fragment>
  </Router>
);

export default App;
