import React from "react";
import LangInput from "./LangInput";

export default () => {
  return (
    <div className="jumbotron bg-dark pb-5 mb-0">
      <div className="sticky-bottom text-center text-white">
        © Copyright 2016-2020
        <a href="/"> {LangInput("company_name")}</a>
      </div>
    </div>
  );
};
