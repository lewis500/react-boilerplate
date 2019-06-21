import React from "react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "src/components/App";
import root from 'src/reducers/root';

const store:Store = createStore(root);
const container = document.getElementById("root");
if (!container) throw Error("no root container");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
