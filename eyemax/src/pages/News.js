import React from "react";
import LangInput from "../components/LangInput";

const News = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-2 pb-1">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="black-text">{LangInput("news")}</h4>
          </div>
          <div className="col-lg-4">
            <div className="row ml-1">
              <i
                className="fa fa-map-marker-alt fa-lg"
                style={{ lineHeight: 1.5 }}
                aria-hidden="true"
              ></i>
              <h4 className="black-text">{LangInput("location")}</h4>
              <h4 className="black-text">{LangInput("news_location")}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-mid-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-mid-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-mid-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_mid")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-mid-pic1" className="tab-pane">
                <img
                  src="../../News/mid.jpg"
                  className="card-img-top"
                  alt="mid"
                />
                <p className="text-center my-3">{LangInput("news_mid_pic")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-plk-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-plk-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-plk-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_plk")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-plk-pic1" className="tab-pane">
                <img
                  src="../../News/plk.jpg"
                  className="card-img-top"
                  alt="plk"
                />
                <p className="text-center my-3">{LangInput("news_plk_pic")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-cctv-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-cctv-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-cctv-pic2"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic2")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-cctv-pic3"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic3")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-cctv-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_cctv")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-cctv-pic1" className="tab-pane">
                <img
                  src="../../News/cctv1.jpg"
                  className="card-img-top"
                  alt="cctv1"
                />
                <p className="text-center my-3">{LangInput("news_cctv_pic")}</p>
              </div>
              <div id="cases-cctv-pic2" className="tab-pane">
                <img
                  src="../../News/cctv2.jpg"
                  className="card-img-top"
                  alt="cctv2"
                />
                <p className="text-center my-3">{LangInput("news_cctv_pic")}</p>
              </div>
              <div id="cases-cctv-pic3" className="tab-pane">
                <img
                  src="../../News/cctv3.jpg"
                  className="card-img-top"
                  alt="cctv3"
                />
                <p className="text-center my-3">{LangInput("news_cctv_pic")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-skh-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-skh-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-skh-pic2"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic2")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-skh-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_plk")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-skh-pic1" className="tab-pane">
                <img
                  src="../../News/skh1.jpg"
                  className="card-img-top"
                  alt="skh1"
                />
                <p className="text-center my-3">{LangInput("news_skh_pic")}</p>
              </div>
              <div id="cases-skh-pic2" className="tab-pane">
                <img
                  src="../../News/skh2.jpg"
                  className="card-img-top"
                  alt="skh2"
                />
                <p className="text-center my-3">{LangInput("news_skh_pic")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-design-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-design-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-design-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_design")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-design-pic1" className="tab-pane">
                <img
                  src="../../News/design.jpg"
                  className="card-img-top"
                  alt="design"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-develop-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-develop-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-develop-pic2"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic2")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-develop-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_develop")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-develop-pic1" className="tab-pane">
                <img
                  src="../../News/develop1.jpg"
                  className="card-img-top"
                  alt="develop1"
                />
                <p className="text-center my-3">
                  {LangInput("news_develop_pic1")}
                </p>
              </div>
              <div id="cases-develop-pic2" className="tab-pane">
                <img
                  src="../../News/develop2.jpg"
                  className="card-img-top"
                  alt="develop2"
                />
                <p className="text-center my-3">
                  {LangInput("news_develop_pic2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-young-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-young-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-young-pic2"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic2")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-young-pic3"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic3")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-young-pic4"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic4")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-young-pic5"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic5")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-young-pic6"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic6")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-young-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_young")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-young-pic1" className="tab-pane">
                <img
                  src="../../News/young1.jpg"
                  className="card-img-top"
                  alt="young1"
                />
              </div>
              <div id="cases-young-pic2" className="tab-pane">
                <img
                  src="../../News/young2.jpg"
                  className="card-img-top"
                  alt="young2"
                />
              </div>
              <div id="cases-young-pic3" className="tab-pane">
                <img
                  src="../../News/young3.jpg"
                  className="card-img-top"
                  alt="young3"
                />
              </div>
              <div id="cases-young-pic4" className="tab-pane">
                <img
                  src="../../News/young4.jpg"
                  className="card-img-top"
                  alt="young4"
                />
              </div>
              <div id="cases-young-pic5" className="tab-pane">
                <img
                  src="../../News/young5.jpg"
                  className="card-img-top"
                  alt="young5"
                />
              </div>
              <div id="cases-young-pic6" className="tab-pane">
                <img
                  src="../../News/young6.jpg"
                  className="card-img-top"
                  alt="young6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-fun-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-fun-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-fun-pic2"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic2")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-fun-pic3"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic3")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-fun-intro" class="tab-pane active">
                <h4 className="mb-5">{LangInput("news_fun")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-fun-pic1" className="tab-pane">
                <img
                  src="../../News/fun1.jpg"
                  className="card-img-top"
                  alt="fun1"
                />
              </div>
              <div id="cases-fun-pic2" className="tab-pane">
                <img
                  src="../../News/fun2.jpg"
                  className="card-img-top"
                  alt="fun2"
                />
              </div>
              <div id="cases-fun-pic3" className="tab-pane">
                <img
                  src="../../News/fun3.jpg"
                  className="card-img-top"
                  alt="fun3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#cases-ching_yi-intro"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_intro")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-ching_yi-pic1"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic1")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-ching_yi-pic2"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic2")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-ching_yi-pic3"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic3")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#cases-ching_yi-pic4"
                    style={{ color: "#3c3" }}
                  >
                    {LangInput("news_tab_pic4")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content card-body">
              <div id="cases-ching_yi-intro" className="tab-pane active">
                <h4 className="mb-5">{LangInput("news_ching_yi")}</h4>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
              <div id="cases-ching_yi-pic1" className="tab-pane">
                <img
                  src="../../News/ching_yi1.jpg"
                  className="card-img-top"
                  alt="ching_yi1"
                />
                <p className="text-center my-3">
                  {LangInput("news_ching_yi_pic")}
                </p>
              </div>
              <div id="cases-ching_yi-pic2" className="tab-pane">
                <img
                  src="../../News/ching_yi2.jpg"
                  className="card-img-top"
                  alt="ching_yi2"
                />
                <p className="text-center my-3">
                  {LangInput("news_ching_yi_pic")}
                </p>
              </div>
              <div id="cases-ching_yi-pic3" className="tab-pane">
                <img
                  src="../../News/ching_yi3.jpg"
                  className="card-img-top"
                  alt="ching_yi3"
                />
                <p className="text-center my-3">
                  {LangInput("news_ching_yi_pic")}
                </p>
              </div>
              <div id="cases-ching_yi-pic4" className="tab-pane">
                <img
                  src="../../News/ching_yi4.jpg"
                  className="card-img-top"
                  alt="ching_yi4"
                />
                <p className="text-center my-3">
                  {LangInput("news_ching_yi_pic")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
