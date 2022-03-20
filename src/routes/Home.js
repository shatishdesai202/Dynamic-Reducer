import React, { Fragment } from "react";

const Home = () => (
  <Fragment>
    <h1>Dynamic Redux Reducers</h1>
    <p>
      This is a demo setup of adding redux reducers at times after the initial
      creation of a store.
    </p>
    <p>
      Redux devtools are on, you'll need the Chrome extension that's the best
      way to see when reducers are added.
    </p>
    <p>
      The Books and Records routes should add reducers when you navigate to
      them.
    </p>
  </Fragment>
);

export default Home;
