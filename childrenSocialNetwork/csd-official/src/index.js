import React from "react";
import { render } from "react-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Goal from "./components/Goal";
import Digital from "./components/Digital";
import Support from "./components/Support";
import Suspension from "./components/Suspension";
import ReadytoMarket from "./components/ReadytoMarket";
import "./index.css";
import LangContextProvider from "./Lang";

const App = () => (
  <LangContextProvider>
    <NavBar />
    <div className="container">
      <Goal />
      <Digital />
      <Support />
      <Suspension />
    </div>
    <ReadytoMarket />
    <Footer />
  </LangContextProvider>
);
render(<App />, document.getElementById("root"));
