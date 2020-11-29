import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section id="suspension"  >
    <div className="row">
        <div className="col-md-6 mt-4 pt-4">
            <h3 className="text-center"> {LangInput("suspension")}</h3>
            <ul className="mx-4 px-4">
                <li>{LangInput("suspension_content_1")}</li>
                <li>{LangInput("suspension_content_2")}</li>
                <li>{LangInput("suspension_content_3")}</li>
                <li>{LangInput("suspension_content_4")}</li>
                <li>{LangInput("suspension_content_5")}</li>
            </ul> 
        </div>
        <div className="col-md-6 mt-4 pt-4">
            <h6 className="text-center text-success"> {LangInput("suspension_title_1")}</h6>
            <h6 className="text-center text-success"> {LangInput("suspension_title_2")}</h6>
            <h6 className="text-center text-success"> {LangInput("suspension_title_3")}</h6>
            <div className="row">
                <div className="col-md-6">
                    <h6 className="text-center"> {LangInput("suspension_school")}</h6>
                    <ul>
                        <li>{LangInput("suspension_school_1")}</li>
                        <li>{LangInput("suspension_school_2")}</li>
                    </ul> 
                </div>
                <div className="col-md-6">
                    <h6 className="text-center"> {LangInput("suspension_home")}</h6>
                    <ul>
                        <li>{LangInput("suspension_home_1")}</li>
                        <li>{LangInput("suspension_home_2")}</li>
                        <li>{LangInput("suspension_home_3")}</li>
                        <li>{LangInput("suspension_home_4")}</li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
    <h6 className="text-center text-danger"> {LangInput("suspension_back")}</h6>
  </section>
);
