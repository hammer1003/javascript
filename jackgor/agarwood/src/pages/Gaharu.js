import React from "react";
import LangInput from "../components/LangInput";

export default () => (
  <div className="container" style={{ marginTop: 141, marginBottom: 40 }}>
    <h1 className="text-center mt-5"> {LangInput("gaharu_title")}</h1>
    <p className="text-center">
      <small className="text-muted">{LangInput("update")}</small>
    </p>
    <h5 className="text-center py-4 my-4">{LangInput("gaharu_content_1")}</h5>
    <h5 className="text-center py-4 my-4">{LangInput("gaharu_content_2")}</h5>

    <div className="row py-4 my-4">
      <div className="col-md-4">
        <img src="../../gaharu-0.jpg" className="img-fluid" alt="gaharu-0" />
      </div>
      <div className="col-md-4">
        <img src="../../gaharu-1.jpg" className="img-fluid" alt="gaharu-1" />
      </div>
      <div className="col-md-4">
        <img src="../../gaharu-2.jpg" className="img-fluid" alt="gaharu-2" />
      </div>
    </div>

    <div className="row py-4 my-4">
      <div className="col-md-4">
        <img src="../../gaharu-3.jpg" className="img-fluid" alt="gaharu-0" />
      </div>
      <div className="col-md-4">
        <img src="../../gaharu-4.jpg" className="img-fluid" alt="gaharu-1" />
      </div>
      <div className="col-md-4">
        <img src="../../gaharu-5.jpg" className="img-fluid" alt="gaharu-2" />
      </div>
    </div>
  </div>
);
