import React from "react";
import LangInput from "../components/LangInput";

export default () => (
  <div className="jumbotron bg-dark pb-5 mb-0">
    <div className="sticky-bottom text-center text-white">
      {LangInput("copyright")} <a href="/"> {LangInput("company_name")}</a>
    </div>
  </div>
);
