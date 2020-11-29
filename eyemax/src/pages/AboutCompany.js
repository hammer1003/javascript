import React from "react";
import LangInput from "../components/LangInput";

const AboutCompany = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("about_company")}</h4>
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
                {LangInput("about_company_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <p> {LangInput("about_company_a")}</p>
      <img
        className="img-fluid"
        style={{ paddingTop: 10, paddingBottom: 30 }}
        src="../../about.jpg"
        alt="about"
      />
      <p> {LangInput("about_company_b")}</p>
    </div>
  );
};

export default AboutCompany;
