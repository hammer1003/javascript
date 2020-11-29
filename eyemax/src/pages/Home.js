import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import CarouselSmall from "../components/CarouselSmall";
import LangInput from "../components/LangInput";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <h1 className="text-center mt-5"> {LangInput("business")}</h1>
        <p className="text-center">
          <small>{LangInput("home_content")}</small>
        </p>
        <div className="card my-5">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="../../Home/software.jpg"
                alt="software"
                className="img-fluid round"
                width="495"
                height="320"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title mb-5">
                  {LangInput("business_software")}
                </h5>
                <p className="card-text mb-5">
                  {LangInput("business_software_home_content")}
                </p>
                <Link
                  className="btn btn-outline-success mb-5"
                  to="/business-software"
                >
                  {LangInput("details")}
                </Link>
                <p className="card-text">
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-5">
          <div className="row no-gutters">
            <div className="col-md-6 text-right">
              <div className="card-body">
                <h5 className="card-title mb-5">
                  {LangInput("business_hardware")}
                </h5>
                <p className="card-text mb-5">
                  {LangInput("business_hardware_home_content")}
                </p>
                <Link
                  className="btn btn-outline-success mb-5"
                  to="/business-hardware"
                >
                  {LangInput("details")}
                </Link>
                <p className="card-text">
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img
                src="../../Home/hardware.jpg"
                alt="hardware"
                className="img-fluid round"
                width="495"
                height="320"
              />
            </div>
          </div>
        </div>
        <div className="card my-5">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="../../Home/solution.jpg"
                alt="solution"
                className="img-fluid round"
                width="495"
                height="320"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title mb-5">
                  {LangInput("business_solution")}
                </h5>
                <p className="card-text mb-5">
                  {LangInput("business_solution_home_content")}
                </p>
                <Link
                  className="btn btn-outline-success mb-5"
                  to="/business-solution"
                >
                  {LangInput("details")}
                </Link>
                <p className="card-text">
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-5">
          <div className="row no-gutters">
            <div className="col-md-6 text-right">
              <div className="card-body">
                <h5 className="card-title mb-5">
                  {LangInput("business_others")}
                </h5>
                <p className="card-text mb-5">
                  {LangInput("business_others_home_content")}
                </p>
                <Link
                  className="btn btn-outline-success mb-5"
                  to="/business-others"
                >
                  {LangInput("details")}
                </Link>
                <p className="card-text">
                  <small className="text-muted">{LangInput("update")}</small>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img
                src="../../Home/others.jpg"
                alt="others"
                className="img-fluid round"
                width="495"
                height="320"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5">
        {LangInput("carousel_small_home_title")}
      </h1>
      <CarouselSmall />
    </>
  );
};

export default Home;
