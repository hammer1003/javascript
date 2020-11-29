import React from "react";
import LangInput from "../components/LangInput";

export default () => (
  <div className="container" style={{ marginTop: 141, marginBottom: 40 }}>
    <h1 className="text-center mt-5"> {LangInput("video_title_1")}</h1>
    <p className="text-center">
      <small className="text-muted">{LangInput("update")}</small>
    </p>
    <div className="row my-3 py-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/I5t_VljPsm4"
          allowFullScreen
          title="Introduction to Gaharu Tea Valley Gopeng"
        />
      </div>
    </div>

    <h1 className="text-center mt-5"> {LangInput("video_title_2")}</h1>
    <p className="text-center">
      <small className="text-muted">{LangInput("update")}</small>
    </p>
    <div className="row my-3 py-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/1JOdYrV28S0"
          allowFullScreen
          title="ntroducing Gaharu Tea valley Gopeng Part 1"
        />
      </div>
    </div>

    <h1 className="text-center mt-5"> {LangInput("video_title_3")}</h1>
    <p className="text-center">
      <small className="text-muted">{LangInput("update")}</small>
    </p>
    <div className="row my-3 py-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/V0M7wQf_1dE"
          allowFullScreen
          title="Introduction to Gaharu Tea Valley Gopeng"
        />
      </div>
    </div>

    <h1 className="text-center mt-5"> {LangInput("video_title_4")}</h1>
    <p className="text-center">
      <small className="text-muted">{LangInput("update")}</small>
    </p>
    <div className="row my-3 py-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/E7DS4hDIhF4"
          allowFullScreen
          title="Introduction to Gaharu Tea Valley Gopeng"
        />
      </div>
    </div>
  </div>
);
