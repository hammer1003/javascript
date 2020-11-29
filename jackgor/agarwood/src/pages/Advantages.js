import React from "react";
import LangInput from "../components/LangInput";

export default () => (
  <div className="container" style={{ marginTop: 141, marginBottom: 40 }}>
    <img src="../../adv.jpg" className="img-fluid" alt="adv" />
    <h5 className="text-center my-3 py-3">
      {LangInput("advantages_content_1")}
    </h5>
    <h5 className="text-center my-3 py-3">
      {LangInput("advantages_content_2")}
    </h5>
    <h1 className="text-center mt-5"> {LangInput("efficacy")}</h1>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img
            src="../../efficacy-0.jpg"
            className="card-img-top"
            alt="efficacy-0"
          />
          <div className="card-body">
            <p className="card-text">{LangInput("efficacy_1")}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img
            src="../../efficacy-1.jpg"
            className="card-img-top"
            alt="efficacy-1"
          />
          <div className="card-body">
            <p className="card-text">{LangInput("efficacy_2")}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img
            src="../../efficacy-2.jpg"
            className="card-img-top"
            alt="efficacy-2"
          />
          <div className="card-body">
            <p className="card-text">{LangInput("efficacy_3")}</p>
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center mt-5"> {LangInput("methods")}</h1>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img
            src="../../method-0.jpg"
            className="card-img-top"
            alt="method-0"
          />
          <div className="card-body">
            <p className="card-text">{LangInput("method_1")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
