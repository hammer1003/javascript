import React from "react";
import CarouselProduct from "./CarouselProduct";
import LangInput from "./LangInput";

export default props => (
  <>
    <div className="card">
      <CarouselProduct
        pics={props.productInfo.pics}
        id={props.productInfo.imgId}
      />
      <div className="card-body">
        <h5 className="card-title">{LangInput(props.productInfo.title)}</h5>
        <p className="card-text">{LangInput(props.productInfo.desc)}</p>
        <div className="row">
          <div className="col-md-8">
            <h5 className="card-text pt-2">$HKD{props.productInfo.price}</h5>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target={`#${props.productInfo.modalId}`}
            >
              {LangInput("buy")}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id={props.productInfo.modalId}
      tabindex="-1"
      role="dialog"
      aria-labelledby={`${props.productInfo.modalId}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`${props.productInfo.modalId}Label`}
            >
              {LangInput("buy")}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">{LangInput("name")}</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("name")}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"> {LangInput("email")}</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("email_address")}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">{LangInput("address")}</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("delivery_address")}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {LangInput("card_number")}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("card_number_enter")}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {LangInput("valid_until")}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("valid_until_month")}
              />
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("valid_until_year")}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">{LangInput("cvv")}</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("cvv_enter")}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {LangInput("card_holder")}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={LangInput("card_holder_enter")}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-dark">
              {LangInput("submit")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
