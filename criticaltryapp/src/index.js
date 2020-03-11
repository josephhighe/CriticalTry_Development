import App from "./pages/App";
import StoreFactory, { history } from "./state/StoreFactory";

//std react
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//redux
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";

//needs to be imported AFTER react so sub-css files override index.css
import "./index.css";

//create the store for our state
const store = StoreFactory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
