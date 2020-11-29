import React from "react";
import LangInput from "../components/LangInput";

const CarouselSmall = props => {
  return (
    <div
      id="carouselsmall"
      className="carousel slide carousel-fade mb-5"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {window.innerWidth < 725 ? (
          <>
            <div className="carousel-item active">
              <img
                src="../../News/young2.jpg"
                className="d-block w-100"
                alt="young2"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_young")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/young3.jpg"
                className="d-block w-100"
                alt="young3"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_young")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/young4.jpg"
                className="d-block w-100"
                alt="young4"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_young")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/young5.jpg"
                className="d-block w-100"
                alt="young5"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_young")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/ching_yi1.jpg"
                className="d-block w-100"
                alt="ching_yi1"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_ching_yi")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/ching_yi2.jpg"
                className="d-block w-100"
                alt="ching_yi2"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_ching_yi")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/ching_yi3.jpg"
                className="d-block w-100"
                alt="ching_yi3"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_ching_yi")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../News/ching_yi4.jpg"
                className="d-block w-100"
                alt="ching_yi14"
              />
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_ching_yi")}
                </h4>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="carousel-item active">
              <div className="row">
                <img
                  src="../../News/young2.jpg"
                  className="d-block w-25"
                  alt="young2"
                />
                <img
                  src="../../News/young3.jpg"
                  className="d-block w-25"
                  alt="young3"
                />
                <img
                  src="../../News/young4.jpg"
                  className="d-block w-25"
                  alt="young4"
                />
                <img
                  src="../../News/young5.jpg"
                  className="d-block w-25"
                  alt="young5"
                />
              </div>
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_young")}
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <img
                  src="../../News/ching_yi1.jpg"
                  className="d-block w-25"
                  alt="ching_yi2"
                />
                <img
                  src="../../News/ching_yi2.jpg"
                  className="d-block w-25"
                  alt="ching_yi2"
                />
                <img
                  src="../../News/ching_yi3.jpg"
                  className="d-block w-25"
                  alt="ching_yi3"
                />
                <img
                  src="../../News/ching_yi4.jpg"
                  className="d-block w-25"
                  alt="ching_yi14"
                />
              </div>
              <div className="carousel-caption">
                <h4 className="text-center text-white">
                  {LangInput("carousel_small_caption_ching_yi")}
                </h4>
              </div>
            </div>
          </>
        )}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselsmall"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselsmall"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselSmall;
