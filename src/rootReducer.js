import { combineReducers } from "redux";
import layout from "./reducers/layout";
import home from "./reducers/home";

/**
 * @param {Object} - key/value of reducer functions 
 */
const createReducer = asyncReducers =>
  combineReducers({
    home,
    layout,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers
  });

export default createReducer;
