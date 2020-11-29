import React from "react";
import LangInput from "../LangInput";

export default () => (
  <div className="jumbotron bg-dark text-center text-white mb-0">
    {LangInput("copyright")}
    <a href="/"> {LangInput("company")}</a>
    <p className="text-center">
      <small>{LangInput("update")}</small>
    </p>
  </div>
);
