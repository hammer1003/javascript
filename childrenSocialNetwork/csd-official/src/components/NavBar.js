import React, { useContext } from "react";
import { LangContext } from "../Lang";
import LangInput from "../LangInput";

export default () => {
  const { changeLange } = useContext(LangContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
            {/* <li className="nav-item ">
              <a className="btn btn-outline-danger" href="#goal">
                {LangInput("goal")}
              </a>
            </li>
            <li className="nav-item ">
              <a className="btn btn-outline-danger" href="#digital">
                {LangInput("digital")}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-danger" href="#support">
                {LangInput("support")}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-danger" href="#suspension">
                {LangInput("suspension")}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-danger" href="#ready_to_market">
                {LangInput("ready_to_market")}
              </a>
            </li> */}
            <li className="nav-item">
              <button
                className="btn btn-outline-danger"
                onClick={() => changeLange("en")}
              >
                English
              </button>
            </li>
            <li className="nav-item active">
              <button
                className="btn btn-outline-danger"
                onClick={() => changeLange("zh")}
              >
                繁體中文
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
