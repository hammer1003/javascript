import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import LangInput from "../components/LangInput";

export default () => (
  <>
    <Carousel />
    <div className="container">
      <h1 className="text-center mt-5"> {LangInput("home_title")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("prestigious")}</small>
      </p>
      <div className="row my-5 py-5">
        <div className="col-md-6">
          <img src="../../home-0.jpg" className="img-fluid" alt="home-0" />
        </div>
        <div className="col-md-6 text-left">
          <h3 className="py-3 my-3">{LangInput("home_taiwan_title")}</h3>
          <p className="py-3 my-3">{LangInput("home_taiwan_content")}</p>
          <Link className="btn btn-outline-dark" to="/products">
            {LangInput("details")}
          </Link>
          <small className="text-muted">
            <p className="py-4 my-4">{LangInput("update")}</p>
          </small>
        </div>
      </div>
      <div className="row my-5 py-5">
        <div className="col-md-6 text-right">
          <h3 className="py-3 my-3">{LangInput("home_malaysia_title")}</h3>
          <p className="text-right py-3 my-3">
            {LangInput("home_malaysia_content")}
          </p>
          <Link className="btn btn-outline-dark" to="/products">
            {LangInput("details")}
          </Link>
          <small className="text-muted">
            <p className="py-4 my-4">{LangInput("update")}</p>
          </small>
        </div>
        <div className="col-md-6">
          <img src="../../home-1.jpg" className="img-fluid" alt="home-0" />
        </div>
      </div>
    </div>
  </>
);
