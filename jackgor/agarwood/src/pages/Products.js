import React from "react";
import LangInput from "../components/LangInput";
import ProductItem from "../components/productItem";
import productInfo from "../utils";

export default () => (
  <div className="container" style={{ marginTop: 141, marginBottom: 40 }}>
    <h1 className="text-center mt-5"> {LangInput("product_list")}</h1>
    <div className="row">
      <div className="col-md-4">
        <ProductItem productInfo={productInfo[0]} />
      </div>
      <div className="col-md-4">
        <ProductItem productInfo={productInfo[1]} />
      </div>
    </div>
  </div>
);
