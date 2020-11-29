import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section id="digital"  >
    <div className="row mx-2 px-2 my-4 py-4">
        <h3 className="text-center"> {LangInput("digital_title")}</h3>
            <ul className="mx-4 px-4">
                <li>{LangInput("digital_content_1")}</li>
                <li>{LangInput("digital_content_2")}</li>
                <li>{LangInput("digital_content_3")}</li>
                <li>{LangInput("digital_content_4")}</li>
                <li>{LangInput("digital_content_5")}</li>
                <li>{LangInput("digital_content_6")}</li>
                <li>{LangInput("digital_content_7")}</li>
                <li>{LangInput("digital_content_8")}</li>
            </ul> 
    </div>
    <div className="row mx-2 px-2 my-4 py-4">
        <div className="col-md-6 my-2 py-2">
            <div className="text-center">
                <img className="img-fluid rounded" src="../../pad.jpg" alt="pad.jpg" />
                <h3 className="text-primary my-2 py-2"> {LangInput("axispad")}</h3>
            </div>
        </div>
        <div className="col-md-6 my-4 py-4">
            <h5 className="text-success"> {LangInput("axispad_title_1a")}</h5>
            <h5 className="text-success"> {LangInput("axispad_title_1b")}</h5>
                <ul className="mx-2 px-2">
                    <li>{LangInput("axispad_content_1")}</li>
                    <ul className="mx-2 px-2">
                        <li>{LangInput("axispad_content_1A")}</li>
                        <li>{LangInput("axispad_content_1B")}</li>
                    </ul>
                    <li>{LangInput("axispad_content_2")}</li>
                    <ul className="mx-2 px-2">
                        <li>{LangInput("axispad_content_2A")}</li>
                        <li>{LangInput("axispad_content_2B")}</li>
                    </ul>
                    <li>{LangInput("axispad_content_3")}</li>
                    <ul className="mx-2 px-2">
                        <li>{LangInput("axispad_content_3A")}</li>
                        <li>{LangInput("axispad_content_3B")}</li>
                        <li>{LangInput("axispad_content_3C")}</li>
                    </ul>
                </ul> 

                <h5 className="text-danger mt-5 pt-5"> {LangInput("axispad_title_2a")}</h5>
                <h5 className="text-danger"> {LangInput("axispad_title_2b")}</h5>
                <ul className="mx-2 px-2">
                    <li>{LangInput("axispad_content_4")}</li>
                    <ul className="mx-2 px-2">
                        <li>{LangInput("axispad_content_4A")}</li>
                        <li>{LangInput("axispad_content_4B")}</li>
                    </ul>
                    <li>{LangInput("axispad_content_5")}</li>
                    <ul className="mx-2 px-2">
                        <li>{LangInput("axispad_content_5A")}</li>
                        <li>{LangInput("axispad_content_5B")}</li>
                    </ul>
                </ul> 
        </div>
    </div>
  </section>
);
