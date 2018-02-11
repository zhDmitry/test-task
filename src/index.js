import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import logo from "./logo.svg";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
