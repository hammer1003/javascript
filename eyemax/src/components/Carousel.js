import React from "react";

const Carousel = props => {
  return (
    <div
      id="carousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      style={window.innerWidth > 376 ? { marginTop: 91 } : { marginTop: 131 }}
    >
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
      </ol>
      <div className="carousel-inner">
        {window.innerWidth > 725 ? (
          <>
            <div className="carousel-item active">
              <img
                src="../../Banners/banner-0.jpg"
                className="img-fluid d-block w-100"
                alt="banner-0"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-1.jpg"
                className="img-fluid d-block w-100"
                alt="banner-1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-2.jpg"
                className="img-fluid d-block w-100"
                alt="banner-2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-3.jpg"
                className="img-fluid d-block w-100"
                alt="banner-3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-4.jpg"
                className="img-fluid d-block w-100"
                alt="banner-4"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-5.jpg"
                className="img-fluid d-block w-100"
                alt="banner-5"
              />
            </div>
          </>
        ) : (
          <>
            <div className="carousel-item active">
              <img
                src="../../Banners/banner-0.jpg"
                className="d-block w-100"
                width="400"
                height="250"
                alt="banner-0"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-1.jpg"
                className="d-block w-100"
                width="400"
                height="250"
                alt="banner-1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-2.jpg"
                className="d-block w-100"
                width="400"
                height="250"
                alt="banner-2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-3.jpg"
                className="d-block w-100"
                width="400"
                height="250"
                alt="banner-3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-4.jpg"
                className="d-block w-100"
                width="400"
                height="250"
                alt="banner-4"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../Banners/banner-5.jpg"
                className="d-block w-100"
                width="400"
                height="250"
                alt="banner-5"
              />
            </div>
          </>
        )}
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
