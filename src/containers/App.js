import React, { Component } from "react";
import { view } from "react-easy-state";
import { store, actions } from "../store";

class App extends Component {
  render() {
    return <div onClick={actions.fetchUser}>{store.name}</div>;
  }
}

export default view(App);
