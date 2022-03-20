import React, { Fragment } from "react";
import { withReducer } from "../../withReducer";
import reducer from "./ducks";
import { Route, Link } from "react-router-dom";
import Record from "./routes/Record";

/**
 * This is a little strange. You'd likely connect a component like this to
 * display the record listing, but for demo purposes I just hard-coded it.
 */
const Records = () => (
  <Fragment>
    <h1>Records I Can See Right Now</h1>
    <ul>
      <li>
        <Link to="/records/record-1">White Pony</Link>
      </li>
      <li>
        <Link to="/records/record-2">Metallica</Link>
      </li>
      <li>
        <Link to="/records/record-3">The Fragile</Link>
      </li>
    </ul>
    <Route path="/records/:id" component={Record} />
  </Fragment>
);

export default withReducer("records", reducer)(Records);
