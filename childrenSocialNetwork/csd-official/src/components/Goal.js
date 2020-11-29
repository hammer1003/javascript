import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section
    id="goal"
    style={window.innerWidth > 994 ? { marginTop: 132 } : { marginTop: 128 }}
  >
    <div className="row">
      <div className="col-md-6 my-2 py-2">
        <img className="img-fluid rounded" src="../../kid.jpg" alt="kid.jpg" />
      </div>
      <div className="col-md-6 my-4 py-4">
        <h3 className="text-center"> {LangInput("goal_title")}</h3>
        <p className="my-4 py-4" > {LangInput("goal_content")}</p>
      </div>
    </div>
  </section>
);
