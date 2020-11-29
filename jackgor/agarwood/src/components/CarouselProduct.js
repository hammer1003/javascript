import React from "react";

export default props => (
  <div
    id={props.id}
    className="container carousel slide carousel-fade"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target={`#${props.id}`}
        data-slide-to="0"
        className="active"
        style={{ backgroundColor: "black" }}
      ></li>
      <li
        data-target={`#${props.id}`}
        data-slide-to="1"
        style={{ backgroundColor: "black" }}
      ></li>
      <li
        data-target={`#${props.id}`}
        data-slide-to="2"
        style={{ backgroundColor: "black" }}
      ></li>
    </ol>
    <div className="carousel-inner">
      {props.pics.map((pic, i) => (
        <div
          className={i === 0 ? "carousel-item active" : "carousel-item"}
          key={i}
        >
          <img
            src={pic}
            className=" d-block w-100"
            width="318"
            height="318"
            alt={pic}
          />
        </div>
      ))}
    </div>
  </div>
);
