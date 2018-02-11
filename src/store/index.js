import { store as makeStore } from "react-easy-state";

import makeActions from "./actions";

const store = makeStore({
  name: "Bob",
  lol: "kek"
});

const actions = makeActions(store);

export { store, actions };
