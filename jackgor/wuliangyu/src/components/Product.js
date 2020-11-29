import React from "react";
import LangInput from "../LangInput";

export default () => (
  <section
    className="container"
    id="product"
    style={window.innerWidth > 994 ? { marginTop: 152 } : { marginTop: 128 }}
  >
    <h1 className="text-center my-3 py-3">{LangInput("product_title")}</h1>
    <div className="row">
      <div className="col-md-5">
        <div
          id="carouselProduct"
          className="container carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselProduct"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselProduct" data-slide-to="1"></li>
            <li data-target="#carouselProduct" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../product/0.jpg"
                width="442"
                height="442"
                className="img-fluid rounded d-block w-100"
                alt="product-0"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../product/1.jpg"
                width="266"
                height="442"
                className="img-fluid rounded d-block w-100"
                alt="product-1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../product/2.jpg"
                width="187"
                height="447"
                className="img-fluid rounded d-block w-100"
                alt="product-2"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselProduct"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselProduct"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="col-md-7 text-left">
        <h5 className="mt-4 pt-4">{LangInput("product_name")}</h5>
        <h5 className="my-1 py-1">{LangInput("product_fragrance")}</h5>
        <h5 className="my-1 py-1">{LangInput("product_alcohol")}</h5>
        <h5 className="my-1 py-1">{LangInput("product_net_weight")}</h5>
        <h5 className="my-1 py-1">{LangInput("product_origin")}</h5>
        <h5 className="my-1 py-1">{LangInput("product_package")}</h5>
        <h5 className="my-1 py-1">{LangInput("product_manu")}</h5>
      </div>
    </div>
  </section>
);
