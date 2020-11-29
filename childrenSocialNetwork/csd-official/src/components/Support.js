import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section id="support">
    <h3 className="text-center"> {LangInput("support_title")}</h3>
    <div className="row mb-4 pb-4">
        <div className="text-center col-md-4 ">
            <h3 className="text-success"> {LangInput("prevention")}</h3>
            <h3> {LangInput("tier1")}</h3>
            <h5> {LangInput("tier1_content_a")}</h5>
            <h5> {LangInput("tier1_content_b")}</h5>
        </div>
        <div className="col-md-8">
            <h3 className="text-danger text-center"> {LangInput("intervention")}</h3>
            <div className="row">
                <div className="text-center col-md-6">
                    <h3> {LangInput("tier2")}</h3>
                    <h5> {LangInput("tier2_content_a")}</h5>
                    <h5> {LangInput("tier2_content_b")}</h5>
                </div>
                <div className="text-center col-md-6">
                    <h3> {LangInput("tier3")}</h3>
                    <h5> {LangInput("tier3_content_a")}</h5>
                    <h5> {LangInput("tier3_content_b")}</h5>
                </div>
            </div>
        </div>
    </div>
  </section>
);
