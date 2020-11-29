import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LangContextProvider from "./Lang";
import Advantages from "./pages/Advantages";
import Gaharu from "./pages/Gaharu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Videos from "./pages/Videos";

const App = () => (
  <BrowserRouter>
    <Switch>
      <LangContextProvider>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route path="/products" component={Products} />
        <Route path="/gaharu" component={Gaharu} />
        <Route path="/advantages" component={Advantages} />
        <Route render={() => <Redirect to="/" />} />
        <Footer />
      </LangContextProvider>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
