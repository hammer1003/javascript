import React from "react";
import Carousel from "../components/Carousel";
import LangInput from "../components/LangInput";

export default () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <h1 className="text-center mt-5">{LangInput("home_page")}</h1>
        <p className="text-center">
          <small className="text-muted">{LangInput("company_name")}</small>
        </p>
        <div className="card my-5">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="../../home-0.jpg"
                alt="software"
                className="img-fluid round"
                width="500"
                height="320"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title mb-5">{LangInput("title")}</h3>
                <p className="card-text mb-5">{LangInput("main_detail")}</p>
                <a className="btn btn-outline-success mb-5" href="/">
                  {LangInput("more")}
                </a>
                <p className="card-text">
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-5">
          <div className="row no-gutters">
            <div className="col-md-6 text-right">
              <div className="card-body">
                <h3 className="card-title mb-5">{LangInput("title")}</h3>
                <p className="card-text mb-5">{LangInput("main_detail")}</p>
                <a className="btn btn-outline-success mb-5" href="/">
                  {LangInput("more")}
                </a>
                <p className="card-text">
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img
                src="../../home-1.jpg"
                alt="hardware"
                className="img-fluid round"
                width="500"
                height="320"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
