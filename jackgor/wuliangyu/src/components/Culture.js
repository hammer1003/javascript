import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section className="container my-4 py-4" id="culture">
    <h1 className="text-center mb-4 pb-4"> {LangInput("culture_title")}</h1>
    <div className="row">
      <div className="col-md-6 my-2 py-2">
        <img className="img-fluid rounded" src="../../pic/0.jpg" alt="pic-0" />
      </div>
      <div className="col-md-6 my-2 py-2">
        <img className="img-fluid rounded" src="../../pic/1.jpg" alt="pic-1" />
      </div>
    </div>
  </section>
);
