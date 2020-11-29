import React from "react";
import LangInput from "../components/LangInput";

const BusinessHardware = props => {
  return (
    <div className="container" style={{ marginTop: 99, marginBottom: 40 }}>
      <div className="jumbotron pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="black-text">{LangInput("business_hardware")}</h4>
          </div>
          <div className="col-lg-6">
            <div className="row ml-1">
              <i
                className="fa fa-map-marker-alt fa-lg"
                style={{ lineHeight: 1.5 }}
                aria-hidden="true"
              ></i>
              <h4 className="black-text">{LangInput("location")}</h4>
              <h4 className="black-text">
                {LangInput("business_hardware_location")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 my-5">
          <div className="card">
            <img
              src="../../Business/chair.jpg"
              className="card-img-top"
              alt="VR chair"
            />
            <div className="card-body">
              <h4 className="card-title">
                {LangInput("business_hardware_chair_title")}
              </h4>
              <div className="card-text">
                <p className="my-1">
                  {LangInput("business_software_fun_land_advan_content_a")}
                </p>
                <p className="my-1">
                  {LangInput("business_software_fun_land_advan_content_b")}
                </p>
                <p className="my-1">
                  {LangInput("business_software_fun_land_advan_content_c")}
                </p>
                <p className="my-1">
                  {LangInput("business_software_fun_land_advan_content_d")}
                </p>
                <p className="mb-1">
                  {LangInput("business_software_fun_land_advan_content_e")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-5">
          <div className="card">
            <img
              src="../../Business/fork_lift.png"
              className="card-img-top"
              alt="VR chair"
            />
            <div className="card-body">
              <h4 className="card-title">
                {LangInput("business_hardware_fork_lift_title")}
              </h4>
              <div className="card-text">
                <p className="my-1">
                  {LangInput("business_hardware_fork_lift_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-5">
          <div className="card">
            <img
              src="../../Business/fork_lift_post.png"
              className="card-img-top"
              alt="VR chair"
            />
            <div className="card-body">
              <h4 className="card-title">
                {LangInput("business_hardware_fork_lift_title")}
              </h4>
              <div className="card-text">
                <p className="my-1">
                  {LangInput("business_hardware_fork_lift_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-4">
          <div className="card">
            <img
              src="../../Business/armor.jpg"
              className="card-img-top"
              alt="VR chair"
            />
            <div className="card-body">
              <h4 className="card-title">
                {LangInput("business_hardware_armor_title")}
              </h4>
              <div className="card-text">
                <p className="my-1">
                  {LangInput("business_hardware_armor_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img
              src="../../Business/esport.jpg"
              className="card-img-top"
              alt="VR chair"
            />
            <div className="card-body">
              <h4 className="card-title">
                {LangInput("business_hardware_esport_title")}
              </h4>
              <div className="card-text">
                <p className="my-1">
                  {LangInput("business_hardware_esport_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#hardware-name"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_name")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-pcg"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_pcg")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-display"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_display")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-storage"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_storage")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-button"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_button")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-monitor"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_monitor")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-interface"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_interface")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-bw"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_bw")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#hardware-others"
                style={{ color: "#3c3" }}
              >
                {LangInput("business_hardware_tab_others")}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div id="hardware-name" class="tab-pane active">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <h2 className="my-5">
                  {LangInput("business_hardware_name_title")}
                </h2>
                <p className="my-5">
                  {LangInput("business_hardware_name_content")}
                </p>
                <p>
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
          <div id="hardware-pcg" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_pcg")}
                  </h2>
                  <p className="my-1">
                    {LangInput("business_hardware_processor")}
                  </p>
                  <p className="my-1">{LangInput("business_hardware_cpu")}</p>
                  <p className="mb-5">{LangInput("business_hardware_gpu")}</p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-display" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_display")}
                  </h2>
                  <p className="my-1">
                    {LangInput("business_hardware_display_lcd")}
                  </p>
                  <p className="my-1">
                    {LangInput("business_hardware_display_view")}
                  </p>
                  <p className="mb-5">
                    {LangInput("business_hardware_display_range")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-storage" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_storage")}
                  </h2>
                  <p className="my-1">
                    {LangInput("business_hardware_storage_ram")}
                  </p>
                  <p className="my-1">
                    {LangInput("business_hardware_storage_rom")}
                  </p>
                  <p className="mb-5">
                    {LangInput("business_hardware_storage_support")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-button" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_button")}
                  </h2>
                  <p className="mb-5">
                    {LangInput("business_hardware_button")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-monitor" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_monitor")}
                  </h2>
                  <p className="my-1">
                    {LangInput("business_hardware_monitor_sensor")}
                  </p>
                  <p className="my-1">
                    {LangInput("business_hardware_monitor_button")}
                  </p>
                  <p className="my-1">
                    {LangInput("business_hardware_monitor_battery")}
                  </p>
                  <p className="mb-5">
                    {LangInput("business_hardware_monitor_io")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-interface" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_interface")}
                  </h2>
                  <p className="mb-5">
                    {LangInput("business_hardware_interface")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-bw" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_bw")}
                  </h2>
                  <p className="my-1">
                    {LangInput("business_hardware_bw_battery")}
                  </p>
                  <p className="mb-5">
                    {LangInput("business_hardware_bw_weight")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware-others" class="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="../../Business/headset.png"
                  alt="headset"
                  className="card-img-top"
                  width="300"
                  height="301"
                />
              </div>
              <div className="col-md-8">
                <div className="col-md-8">
                  <h2 className="my-5">
                    {LangInput("business_hardware_tab_others")}
                  </h2>
                  <p className="mb-5">
                    {LangInput("business_hardware_others")}
                  </p>
                  <p>
                    <small className="text-muted">{LangInput("update")}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHardware;
