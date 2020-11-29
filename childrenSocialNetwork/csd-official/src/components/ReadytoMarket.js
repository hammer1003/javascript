import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section id="ready_to_market" className="jumbotron bg-danger text-white mb-0" >
        <h3 className="mx-2 px-2 mt-4 pt-4">  {LangInput("ready_to_market")} - {LangInput("ready_to_market_title")}</h3>
        <div className="row">
            <ul className="mx-4 px-4">
                <li>{LangInput("ready_to_market_content_1")}</li>
                <li>{LangInput("ready_to_market_content_2")}</li>
                <li>{LangInput("ready_to_market_content_3")}</li>
                <li>{LangInput("ready_to_market_content_4")}</li>
            </ul> 
    </div>
  </section>
);
