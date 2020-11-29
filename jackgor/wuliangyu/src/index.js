import React from "react";
import { render } from "react-dom";
import Cooper from "./components/Cooper";
import Culture from "./components/Culture";
import Footer from "./components/Footer";
import History from "./components/History";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import "./index.css";
import LangContextProvider from "./Lang";

const App = () => (
  <LangContextProvider>
    <NavBar />
    <div className="container">
      <Product />
      {/* <Intro /> */}
      <History />
      <Culture />
      <Cooper />
    </div>
    <Footer />
  </LangContextProvider>
);
render(<App />, document.getElementById("root"));
