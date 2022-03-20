import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import initializeStore from "./initializeStore";
import App from "./App";

// This is important. This is the point where all the store init code
// because a real thing.
const store = initializeStore();

render(
  // This is important.
  // Giving store to Provider here makes sure the redux store is
  // available to any connect(ed) component, but also in the context
  // of any component which we take advantage of in withReducer.js.
  //
  // See https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
