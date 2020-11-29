import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Reducer from "./Reducer";
import * as serviceWorker from "./serviceWorker";

const App = () => (
  <Router>
    <Switch>
      <Route path="/reducer" component={Reducer} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
