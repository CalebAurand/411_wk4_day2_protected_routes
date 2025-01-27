import React from "react";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store';

import App from "./App";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
