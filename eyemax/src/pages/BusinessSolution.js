import React from "react";
import LangInput from "../components/LangInput";

const BusinessSolution = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("business_solution")}</h4>
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
                {LangInput("business_solution_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <img
              src="../../Business/teach.png"
              className="card-img-top"
              alt="teach"
            />
            <div className="card-body">
              <h3 className="mb-5">
                {LangInput("business_solution_teach_title")}
              </h3>
              <p className="my-5">
                {LangInput("business_solution_teach_content_a")}
              </p>
              <p className="my-5">
                {LangInput("business_solution_teach_content_b")}
              </p>
              <p>
                <small className="text-muted">{LangInput("update")}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
