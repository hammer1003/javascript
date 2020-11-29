import React from "react";
import LangInput from "../components/LangInput";

const AboutCulture = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("about_culture")}</h4>
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
                {LangInput("about_culture_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <h4 className="my-3">
        {LangInput("about_culture_vision")}
        {LangInput("about_culture_vision_content")}
      </h4>

      <h4 className="my-3">
        {LangInput("about_culture_spirit")}
        {LangInput("about_culture_spirit_content")}
      </h4>

      <h4 className="my-3">
        {LangInput("about_culture_philosophy")}
        {LangInput("about_culture_philosophy_content")}
      </h4>

      <h4 className="my-3">
        {LangInput("about_culture_service")}
        {LangInput("about_culture_service_content")}
      </h4>

      <h4 className="my-3">
        {LangInput("about_culture_vision")}
        {LangInput("about_culture_vision_content")}
      </h4>

      <h4 className="my-3">{LangInput("about_culture_adv")}</h4>
      <h4 className="my-3 ml-5"> {LangInput("about_culture_adv_soft")}</h4>
      <h4 className="my-3 ml-5">{LangInput("about_culture_adv_production")}</h4>
      <h4 className="my-3 ml-5"> {LangInput("about_culture_adv_quality")}</h4>
      <h4 className="my-3 ml-5"> {LangInput("about_culture_adv_customer")}</h4>
    </div>
  );
};

export default AboutCulture;
