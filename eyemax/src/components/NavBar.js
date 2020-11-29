import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LangInput from "../components/LangInput";
import { LangContext } from "../Lang";

const NavBar = props => {
  const { changeLange } = useContext(LangContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="../../logo.jpg"
            width="273"
            height="65"
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
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  id="dropdownAbout"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("about")}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownAbout">
                  <Link className="dropdown-item" to="/about-company">
                    {LangInput("about_company")}
                  </Link>
                  <Link className="dropdown-item" to="/about-culture">
                    {LangInput("about_culture")}
                  </Link>
                  <Link className="dropdown-item" to="/about-cert">
                    {LangInput("about_cert")}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  id="dropdownBusiness"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("business")}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownBusiness"
                >
                  <Link className="dropdown-item" to="/business-software">
                    {LangInput("business_software")}
                  </Link>
                  <Link className="dropdown-item" to="/business-hardware">
                    {LangInput("business_hardware")}
                  </Link>
                  <Link className="dropdown-item" to="/business-solution">
                    {LangInput("business_solution")}
                  </Link>
                  <Link className="dropdown-item" to="/business-others">
                    {LangInput("business_others")}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  id="dropdownCases"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("cases")}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownCases">
                  <Link className="dropdown-item" to="/case-hall">
                    {LangInput("cases_hall")}
                  </Link>
                  <Link className="dropdown-item" to="/case-event">
                    {LangInput("cases_event")}
                  </Link>
                  <Link className="dropdown-item" to="/case-exhibit">
                    {LangInput("cases_exhibit")}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="btn btn-outline-success" to="/news">
                {LangInput("news")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="btn btn-outline-success" to="/rent">
                {LangInput("rent")}
              </Link>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
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
                    onClick={() => changeLange("tc")}
                    className="dropdown-item"
                  >
                    繁體中文
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

export default NavBar;
