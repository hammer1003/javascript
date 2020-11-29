import React, { useContext } from "react";
import { LangContext } from "../Lang";
import LangInput from "../LangInput";

export default () => {
  const { changeLange } = useContext(LangContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="../../logo.jpg"
            width="274"
            height="75"
            className="img-fluid d-inline-block align-top"
            alt="logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className="btn btn-outline-dark" href="#intro">
                {LangInput("intro")}
              </a>
            </li>
            <li className="nav-item ">
              <a className="btn btn-outline-dark" href="#history">
                {LangInput("history")}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-dark" href="#culture">
                {LangInput("culture")}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-dark" href="#product">
                {LangInput("product")}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-dark" href="#cooper">
                {LangInput("cooper")}
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-dark"
                onClick={() => changeLange("en")}
              >
                English
              </button>
            </li>
            <li className="nav-item active">
              <button
                className="btn btn-outline-dark"
                onClick={() => changeLange("zh")}
              >
                简体中文
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
