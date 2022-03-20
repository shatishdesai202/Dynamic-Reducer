import React, { Fragment } from "react";
import { connect } from "react-redux";
import { object, string } from "prop-types";

const Record = props => (
  <Fragment>
    <h3>{props.record.name}</h3>
    <h4>by {props.record.artist}</h4>
    <p>The record data is from the store. Look in the redux dev tools.</p>
  </Fragment>
);

Record.propTypes = {
  recordId: string.isRequired,
  record: object.isRequired
};

/**
 * Here we show an example of a component being connected
 * to the store and selecting items added from a dynamic reducer.
 * This is a trivial example, but it's here to show the end
 * result of adding reducers after the initial store creation.
 */

const mapStateToProps = (state, props) => {
  // Grab the record id from the route props
  const { match: { params: { id } } } = props;

  return {
    recordId: id,
    record: state.records[id] || {}
  };
};

export default connect(mapStateToProps)(Record);
