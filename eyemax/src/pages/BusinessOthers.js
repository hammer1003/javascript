import React from "react";
import LangInput from "../components/LangInput";

const BusinessOthers = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("business_others")}</h4>
          </div>
          <div className="col-lg-6">
            <div className="row ml-1">
              <i
                className="fa fa-map-marker-alt fa-lg"
                style={{ lineHeight: 1.5 }}
                aria-hidden="true"
              ></i>
              <h4 className="black-text">{LangInput("location")}</h4>
              <h4 className="black-text">
                {LangInput("business_others_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#others-explain"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_others_tab_contain")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#others-part1"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_others_tab_part1")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#others-part2"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_others_tab_part2")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#others-part3"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_others_tab_part3")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#others-part4"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_others_tab_part4")}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div id="others-explain" className="tab-pane active">
            <h2 className="my-5">
              {LangInput("business_others_explain_title")}
            </h2>
            <p className="my-5">
              {LangInput("business_others_explain_content")}
            </p>
            <p>
              <small className="text-muted">{LangInput("update")}</small>
            </p>
          </div>
          <div id="others-part1" className="tab-pane">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="../../Business/cbp.png"
                  alt="headset"
                  width="480"
                  height="301"
                />
              </div>
              <div className="col-md-6">
                <h2 className="my-5">{LangInput("business_others_part1")}</h2>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="others-part2" className="tab-pane">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="../../Business/headset.png"
                  alt="headset"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-6">
                <h2 className="my-5">{LangInput("business_others_part2")}</h2>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="others-part3" className="tab-pane">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="../../Business/others1.png"
                  alt="headset"
                  width="520"
                  height="301"
                />
              </div>
              <div className="col-md-6">
                <h2 className="my-5">{LangInput("business_others_part3")}</h2>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="others-part4" className="tab-pane">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="../../Business/others2.png"
                  alt="headset"
                  width="520"
                  height="301"
                />
              </div>
              <div className="col-md-6">
                <h2 className="my-5">{LangInput("business_others_part4")}</h2>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOthers;
