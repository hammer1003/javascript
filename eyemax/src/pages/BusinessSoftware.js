import React from "react";
import LangInput from "../components/LangInput";

const BusinessSoftware = (props) => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("business_software")}</h4>
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
                {LangInput("business_software_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#intro-cbp"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_software_tab_intro")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#advan-cbp"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_software_tab_advan")}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div id="intro-cbp" className="tab-pane active">
            <div className="row">
              <div className="col-md-6 my-3">
                <img
                  className="img-fluid"
                  src="../../Business/cbp.png"
                  alt="cinema boardcast"
                  width="480"
                  height="320"
                />
              </div>
              <div className="col-md-6 my-3">
                <h2 className="mb-5">
                  {LangInput("business_software_cpb_intro_title")}
                </h2>
                <p className="my-5">
                  {LangInput("business_software_cpb_intro_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="advan-cbp" className="tab-pane">
            <div className="row">
              <div className="col-md-6 my-3">
                <img
                  className="img-fluid"
                  src="../../Business/cbp.png"
                  alt="cinema boardcast"
                  width="480"
                  height="320"
                />
              </div>
              <div className="col-md-6 my-3">
                <h2 className="mb-4">
                  {LangInput("business_software_cpb_advan_title")}
                </h2>
                <h4 className="my-1">
                  {LangInput("business_software_cpb_advan_content_a")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cpb_advan_content_b")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cpb_advan_content_c")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cpb_advan_content_d")}
                </h4>
                <h4 className="mb-5">
                  {LangInput("business_software_cpb_advan_content_e")}
                </h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#intro-cp"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_software_tab_intro")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#advan-cp"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_software_tab_advan")}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div id="intro-cp" className="tab-pane active">
            <div className="row">
              <div className="col-md-6 my-3">
                <img
                  className="img-fluid"
                  src="../../Business/cp.png"
                  alt="classroom platform"
                  width="480"
                  height="320"
                />
              </div>
              <div className="col-md-6 my-3">
                <h2 className="mb-5">
                  {LangInput("business_software_cb_intro_title")}
                </h2>
                <p className="my-5">
                  {LangInput("business_software_cb_intro_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="advan-cp" className="tab-pane">
            <div className="row">
              <div className="col-md-6 my-3">
                <img
                  className="img-fluid"
                  src="../../Business/cp.png"
                  alt="funny land"
                  width="480"
                  height="320"
                />
              </div>
              <div className="col-md-6 my-3">
                <h2 className="mb-4">
                  {LangInput("business_software_cb_advan_title")}
                </h2>
                <h4 className="my-1">
                  {LangInput("business_software_cb_advan_content_a")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cb_advan_content_b")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cb_advan_content_c")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cb_advan_content_d")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_cb_advan_content_e")}
                </h4>
                <h4 className="mb-5">
                  {LangInput("business_software_cb_advan_content_f")}
                </h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#intro-fun-land"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_software_tab_intro")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#advan-fun-land"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_software_tab_advan")}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div id="intro-fun-land" className="tab-pane active">
            <div className="row">
              <div className="col-md-6 my-3">
                <img
                  className="img-fluid"
                  src="../../Business/fun_land.png"
                  alt="cinema boardcast"
                  width="480"
                  height="320"
                />
              </div>
              <div className="col-md-6 my-3">
                <h2 className="mb-5">
                  {LangInput("business_software_fun_land_intro_title")}
                </h2>
                <p className="my-5">
                  {LangInput("business_software_fun_land_intro_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="advan-fun-land" className="tab-pane">
            <div className="row">
              <div className="col-md-6 my-3">
                <img
                  className="img-fluid"
                  src="../../Business/fun_land.png"
                  alt="cinema boardcast"
                  width="480"
                  height="320"
                />
              </div>
              <div className="col-md-6 my-3">
                <h2 className="mb-4">
                  {LangInput("business_software_fun_land_advan_title")}
                </h2>
                <h4 className="my-1">
                  {LangInput("business_software_fun_land_advan_content_a")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_fun_land_advan_content_b")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_fun_land_advan_content_c")}
                </h4>
                <h4 className="my-1">
                  {LangInput("business_software_fun_land_advan_content_d")}
                </h4>
                <h4 className="mb-5">
                  {LangInput("business_software_fun_land_advan_content_e")}
                </h4>
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

export default BusinessSoftware;
