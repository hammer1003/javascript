import React from "react";
import LangInput from "../components/LangInput";

const BusinessRent = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("rent")}</h4>
          </div>
          <div className="col-lg-6">
            <div className="row ml-1">
              <i
                className="fa fa-map-marker-alt fa-lg"
                style={{ lineHeight: 1.5 }}
                aria-hidden="true"
              ></i>
              <h4 className="black-text">{LangInput("location")}</h4>
              <h4 className="black-text">{LangInput("rent_location")}</h4>
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
                href="#headset"
                style={{ color: "#3c3" }}
              >
                {LangInput("rent_headset")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#others"
                style={{ color: "#3c3" }}
              >
                {LangInput("rent_others")}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div id="headset" class="tab-pane active">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <h2 className="my-3">{LangInput("rent_headset")}</h2>
                <p className="my-3">{LangInput("rent_headset_a")}</p>
                <p className="my-3">{LangInput("rent_headset_b")}</p>
                <p className="my-3">{LangInput("rent_headset_c")}</p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="others" class="tab-pane">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="../../rent.jpg"
                  alt="others"
                  className="card-img-top"
                  width="500"
                  height="270"
                />
              </div>
              <div className="col-md-6">
                <h2>
                  <a className="my-3" href="../../VR一体机系统.pdf">
                    {LangInput("rent_others_all")}
                  </a>
                </h2>
                <h2>
                  <a className="my-3" href="../../VR对战体验.pdf">
                    {LangInput("rent_others_fight")}
                  </a>
                </h2>
                <h2>
                  <a className="my-3" href="../../VR工业应用.pdf">
                    {LangInput("rent_others_industry")}
                  </a>
                </h2>
                <h2>
                  <a className="my-3" href="../../VR教育体验.pdf">
                    {LangInput("rent_others_education")}
                  </a>
                </h2>
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

export default BusinessRent;
