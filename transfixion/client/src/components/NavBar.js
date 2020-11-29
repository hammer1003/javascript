import React from "react";
import LangInput from "../components/LangInput";
import Logout from "./Logout";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="../../logo.jpg"
            width="386"
            height="146"
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
              <a className="btn btn-outline-info" href="/">
                {LangInput("main")}
              </a>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  id="user"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("user")}
                </button>
                <div className="dropdown-menu" aria-labelledby="user">
                  <a className="dropdown-item" href="/search-user">
                    {LangInput("search_user")}
                  </a>
                  <a className="dropdown-item" href="/show-users">
                    {LangInput("show_user")}
                  </a>
                  <a className="dropdown-item" href="/update-user">
                    {LangInput("update_user")}
                  </a>
                  <a className="dropdown-item" href="/reset-password">
                    {LangInput("reset_password")}
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  id="factory"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {LangInput("factory")}
                </button>
                <div className="dropdown-menu" aria-labelledby="factory">
                  <a className="dropdown-item" href="/search-factory">
                    {LangInput("search_factory")}
                  </a>
                  <a className="dropdown-item" href="/show-factories">
                    {LangInput("show_factory")}
                  </a>
                  <a className="dropdown-item" href="/create-factory">
                    {LangInput("create_factory")}
                  </a>
                  <a className="dropdown-item" href="/update-factory">
                    {LangInput("update_factory")}
                  </a>
                  <a className="dropdown-item" href="/update-analysis">
                    {LangInput("update_analysis")}
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <a className="btn btn-outline-info" href="/find-factories">
                {LangInput("find_factories")}
              </a>
            </li>
            <li className="nav-item">
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
