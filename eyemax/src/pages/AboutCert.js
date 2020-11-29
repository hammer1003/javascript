import React from "react";
import LangInput from "../components/LangInput";

const AboutCulture = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("about_cert")}</h4>
          </div>
          <div className="col-lg-6">
            <div className="row ml-1">
              <i
                className="fa fa-map-marker-alt fa-lg"
                style={{ lineHeight: 1.5 }}
                aria-hidden="true"
              ></i>
              <h4 className="black-text">{LangInput("location")}</h4>
              <h4 className="black-text">{LangInput("about_cert_location")}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-3"
          data-toggle="modal"
          data-target="#about_cert_gifts"
        >
          <img
            src="../../Cert/cert0.jpg"
            alt="cert0"
            className="img-fluid rounded"
            width="260"
            height="360"
          />
          <h6 className="text-center my-3">{LangInput("about_cert_gifts")}</h6>
          <div
            class="modal fade"
            id="about_cert_gifts"
            tabindex="-1"
            role="dialog"
            aria-labelledby="about_cert_gifts_label"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <img
                src="../../Cert/cert0.jpg"
                alt="cert0"
                className="img-fluid rounded"
                width="498"
                height="850"
              />
            </div>
          </div>
        </div>
        <div
          className="col-lg-3"
          data-toggle="modal"
          data-target="#about_cert_ths"
        >
          <img
            src="../../Cert/cert1.jpg"
            alt="cert1"
            className="img-fluid rounded"
            width="260"
            height="360"
          />
          <h6 className="text-center my-3">{LangInput("about_cert_ths")}</h6>
          <div
            class="modal fade"
            id="about_cert_ths"
            tabindex="-1"
            role="dialog"
            aria-labelledby="about_cert_ths_label"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <img
                src="../../Cert/cert1.jpg"
                alt="cert1"
                className="img-fluid rounded"
                width="498"
                height="850"
              />
            </div>
          </div>
        </div>
        <div
          className="col-lg-3"
          data-toggle="modal"
          data-target="#about_cert_mss"
        >
          <img
            src="../../Cert/cert2.jpg"
            alt="cert2"
            className="img-fluid rounded"
            width="260"
            height="360"
          />
          <h6 className="text-center my-3">{LangInput("about_cert_mss")}</h6>
          <div
            class="modal fade"
            id="about_cert_mss"
            tabindex="-1"
            role="dialog"
            aria-labelledby="about_cert_mss_label"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <img
                src="../../Cert/cert2.jpg"
                alt="cert2"
                className="img-fluid rounded"
                width="498"
                height="850"
              />
            </div>
          </div>
        </div>
        <div
          className="col-lg-3"
          data-toggle="modal"
          data-target="#about_cert_miss"
        >
          <img
            src="../../Cert/cert3.jpg"
            alt="cert3"
            className="img-fluid rounded"
            width="260"
            height="360"
          />
          <h6 className="text-center my-3">{LangInput("about_cert_miss")}</h6>
          <div
            className="modal fade"
            id="about_cert_miss"
            tabindex="-1"
            role="dialog"
            aria-labelledby="about_cert_miss_label"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <img
                src="../../Cert/cert3.jpg"
                alt="cert3"
                className="img-fluid rounded"
                width="498"
                height="850"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCulture;
