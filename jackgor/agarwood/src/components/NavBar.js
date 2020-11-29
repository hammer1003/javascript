import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LangInput from "../components/LangInput";
import { LangContext } from "../Lang";

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
            <li className="nav-item active">
              <Link className="btn btn-outline-dark" to="/">
                {LangInput("home")}
              </Link>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle"
                  id="dropdownAbout"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("intro")}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownAbout">
                  <Link className="dropdown-item" to="/gaharu">
                    {LangInput("gaharu")}
                  </Link>
                  <Link className="dropdown-item" to="/advantages">
                    {LangInput("advantages")}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="btn btn-outline-dark" to="/products">
                {LangInput("product")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="btn btn-outline-dark" to="/videos">
                {LangInput("video")}
              </Link>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle"
                  id="dropdownLanguage"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("language")}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownLanguage"
                >
                  <button
                    onClick={() => changeLange("en")}
                    className="dropdown-item"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLange("zh")}
                    className="dropdown-item"
                  >
                    简体中文
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
