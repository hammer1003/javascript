import React from "react";
import LangInput from "../components/LangInput";
import Login from "../components/Login";
import Registration from "../components/Registration";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mx-auto border rounded mt-5 pt-5 pb-5">
          <div className="row">
            <img
              className="img-fluid mx-auto"
              src="../../logo.jpg"
              width="386"
              height="146"
              alt="logo"
            />
          </div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#signin"
                role="tab"
                aria-controls="nav-signin"
                aria-selected="true"
              >
                {LangInput("login")}
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#signup"
                role="tab"
                aria-controls="nav-signup"
                aria-selected="false"
              >
                {LangInput("registration")}
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#tac"
                role="tab"
                aria-controls="nav-tac"
                aria-selected="false"
              >
                {LangInput("terms")}
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                {LangInput("contact_us")}
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="signin"
              role="tabpanel"
              aria-labelledby="nav-signin-tab"
            >
              <Login />
            </div>
            <div
              className="tab-pane fade"
              id="signup"
              role="tabpanel"
              aria-labelledby="nav-signup-tab"
            >
              <Registration />
            </div>
            <div
              className="mt-4 tab-pane fade"
              id="tac"
              role="tabpanel"
              aria-labelledby="nav-signin-tab"
            >
              <div>{LangInput("term_and_conditions")}</div>
              <small className="text-muted">{LangInput("update")}</small>
            </div>
            <div
              className="mt-4 tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="nav-signin-tab"
            >
              <div> {LangInput("company_name")}</div>
              <small className="text-muted">{LangInput("update")}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
