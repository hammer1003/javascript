import React from "react";
import LangInput from "../components/LangInput";

const CaseHall = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("cases_hall")}</h4>
          </div>
          <div className="col-lg-6">
            <div className="row ml-1">
              <i
                className="fa fa-map-marker-alt fa-lg"
                style={{ lineHeight: 1.5 }}
                aria-hidden="true"
              ></i>
              <h4 className="black-text">{LangInput("location")}</h4>
              <h4 className="black-text">{LangInput("cases_hall_location")}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/mixc.jpg"
              class="card-img-top"
              alt="mixc"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_mixc")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/t101a.jpg"
              class="card-img-top"
              alt="t101a"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_t101")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/t101b.jpg"
              class="card-img-top"
              alt="t101b"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_t101")}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/far_eastern.jpg"
              class="card-img-top"
              alt="far eastern"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_far_eastern")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/hot_spring1.jpg"
              class="card-img-top"
              alt="hot_spring1"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_hot_spring")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/hot_spring2.jpg"
              class="card-img-top"
              alt="hot_spring2"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_hot_spring")}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/hot_spring3.jpg"
              class="card-img-top"
              alt="hot_spring3"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_hot_spring")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/feng_jia.jpg"
              class="card-img-top"
              alt="feng_jia"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_feng_jia")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/chiao_hsi.jpg"
              class="card-img-top"
              alt="chiao_hsi"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_chiao_hsi")}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/syntrend1.jpg"
              class="card-img-top"
              alt="syntrend1"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_syntrend")}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div class="card">
            <img
              src="../../Cases/hall/syntrend2.jpg"
              class="card-img-top"
              alt="syntrend2"
            />
            <div class="card-body">
              <h5 class="card-text text-center">
                {LangInput("cases_hall_syntrend")}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseHall;
