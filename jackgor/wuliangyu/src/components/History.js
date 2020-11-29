import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section className="container my-2 py-2" id="history">
    <h1 className="text-center my-4 py-4">{LangInput("history_title_1")}</h1>
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="../0.mp4"
              title="Introduction Short"
            />
          </div>
        </div>
        <div className="col-md-6 my-1 py-1">
          <p className="mx-1 px-1">{LangInput("history_content_1")}</p>
          <p className="mx-1 px-1">{LangInput("history_content_2")}</p>
        </div>
      </div>
    </div>
    <br /> <br /> <br />
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-6 my-1 py-1">
          <p className="mx-1 px-1">{LangInput("history_content_3")}</p>
          <p className="mx-1 px-1">{LangInput("history_content_4")}</p>
        </div>
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="../1.mp4"
              title="Introduction Short"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
