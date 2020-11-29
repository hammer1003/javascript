import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section className="container my-3 py-3" id="cooper">
    <h1 className="text-center text-warning my-3 py-3">
      {LangInput("cooper_title")}
    </h1>
    <div className="row my-3 py-3">
      <div className="col-md-6">
        <img
          className="img-fluid rounded"
          width="504"
          height="336"
          src="../../pic/2.jpg"
          alt="pic-2"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-warning mt-4 pt-4">{LangInput("cooper_email")}</h4>
        <h4 className="text-warning my-2 py-2">{LangInput("cooper_phone")}</h4>
        <h4 className="text-warning my-2 py-2">
          {LangInput("cooper_whatsapp")}
        </h4>
        <h4 className="text-warning my-2 py-2">{LangInput("cooper_wechat")}</h4>
      </div>
    </div>
  </section>
);
