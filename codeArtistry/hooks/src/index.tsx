import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DarkMode from "./components/darkMode";
import FetchData from "./components/fetchData";
import UseContent from "./components/useContent";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const Main: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/usecontent" component={UseContent} />
        <Route exact path="/darkmode" component={DarkMode} />
        <Route exact path="/fetchdata" component={FetchData} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
