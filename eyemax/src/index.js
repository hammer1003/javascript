import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./index.css";
import LangContextProvider from "./Lang";
import AboutCert from "./pages/AboutCert";
import AboutCompany from "./pages/AboutCompany";
import AboutCulture from "./pages/AboutCulture";
import BusinessHardware from "./pages/BusinessHardware";
import BusinessOthers from "./pages/BusinessOthers";
import BusinessSoftware from "./pages/BusinessSoftware";
import BusinessSolution from "./pages/BusinessSolution";
import CaseEvent from "./pages/CaseEvent";
import CaseExhibit from "./pages/CaseExhibit";
import CaseHall from "./pages/CaseHall";
import Home from "./pages/Home";
import News from "./pages/News";
import Rent from "./pages/Rent";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LangContextProvider>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about-company" component={AboutCompany} />
          <Route path="/about-culture" component={AboutCulture} />
          <Route path="/about-cert" component={AboutCert} />
          <Route path="/business-software" component={BusinessSoftware} />
          <Route path="/business-hardware" component={BusinessHardware} />
          <Route path="/business-solution" component={BusinessSolution} />
          <Route path="/rent" component={Rent} />
          <Route path="/business-others" component={BusinessOthers} />
          <Route path="/case-hall" component={CaseHall} />
          <Route path="/case-event" component={CaseEvent} />
          <Route path="/case-exhibit" component={CaseExhibit} />
          <Route path="/news" component={News} />
          <Route render={() => <Redirect to="/" />} />
          <Footer />
        </LangContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
