import React from "react";

export default props => {
  return (
    <div
      id="carousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {window.innerWidth > 725 ? (
          <>
            <div className="carousel-item active">
              <img
                src="../../banner-0.jpg"
                className="img-fluid d-block w-100"
                alt="banner-0"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../banner-1.jpg"
                className="img-fluid d-block w-100"
                alt="banner-1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../banner-2.jpg"
                className="img-fluid d-block w-100"
                alt="banner-2"
              />
            </div>
          </>
        ) : (
          <>
            <div className="carousel-item active">
              <img
                src="../../banner-0.jpg"
                className="d-block w-100"
                width="480"
                height="270"
                alt="banner-0"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../banner-1.jpg"
                className="d-block w-100"
                width="480"
                height="270"
                alt="banner-1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../banner-2.jpg"
                className="d-block w-100"
                width="480"
                height="270"
                alt="banner-2"
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
