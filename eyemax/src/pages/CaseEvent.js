import React from "react";
import LangInput from "../components/LangInput";

const CaseEvent = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("cases_event")}</h4>
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
                {LangInput("cases_event_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/event/gui_shan1.jpg"
              class="card-img-top"
              alt="gui_shan1"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_event_gui_shan")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/event/gui_shan2.jpg"
              class="card-img-top"
              alt="gui_shan2"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_event_gui_shan")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/event/gui_shan3.jpg"
              class="card-img-top"
              alt="gui_shan3"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_event_gui_shan")}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseEvent;
