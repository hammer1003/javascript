import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import BarChart from "../components/BarChart";
import LangInput from "../components/LangInput";

const FIND_PRODUCT = gql`
mutation findProduct(
    $cost: String!
    $quantity: String!
    $leadTime: String!
    $product: String!
) {
  findProduct(
    cost: $cost
    quantity: $quantity
    leadTime: $leadTime
    product: $product
  ) {
      factoryname
      ranking
      search {
        location
        contactPerson
        contactTel
      }
      evaluate {
        inquiry {
          cost
          quantity
          leadTime
        }
        service {
          cooperation
          speed
          potential
          afterService
          complement
        }
        realiability {
          reputation
          scale
          auditReport
          location
        }
        quality {
          printing
          packing
          skills
          quality
          clear
        }
      }
    }
  }
`;

export default () => {
  const alert = useAlert();

  const [product, setProduct] = useState("bag");
  const [cost, setCost] = useState("1-10");
  const [quantity, setQuantity] = useState("1-50");
  const [leadTime, setLeadTime] = useState("1-3");

  const [data, setData] = useState([]);
  const [evaluate, setEvaluate] = useState();

  const [findProduct, { loading, error }] = useMutation(FIND_PRODUCT, {
    onCompleted({ findProduct }) {
      console.log("findProduct", findProduct);
      if (!findProduct)
        alert.show("Error!!! Something wrong.", {
          type: "error"
        });

      if (findProduct.length === 0)
        alert.show("No Suitable Factory", {
          type: "success"
        });
      setData(findProduct);
      let arr2 = [];
      findProduct.map(item => {
        let arr1 = [];
        let temp = {};
        arr1.push({ name: "cost", value: item.evaluate.inquiry.cost });
        arr1.push({ name: "quantity", value: item.evaluate.inquiry.quantity });
        arr1.push({ name: "leadTime", value: item.evaluate.inquiry.leadTime });

        arr1.push({
          name: "cooperation",
          value: item.evaluate.service.cooperation
        });
        arr1.push({ name: "speed", value: item.evaluate.service.speed });
        arr1.push({
          name: "potential",
          value: item.evaluate.service.potential
        });
        arr1.push({
          name: "afterService",
          value: item.evaluate.service.afterService
        });
        arr1.push({
          name: "complement",
          value: item.evaluate.service.complement
        });

        arr1.push({
          name: "reputation",
          value: item.evaluate.realiability.reputation
        });
        arr1.push({ name: "scale", value: item.evaluate.realiability.scale });
        arr1.push({
          name: "auditReport",
          value: item.evaluate.realiability.auditReport
        });
        arr1.push({
          name: "location",
          value: item.evaluate.realiability.location
        });

        arr1.push({ name: "printing", value: item.evaluate.quality.printing });
        arr1.push({ name: "packing", value: item.evaluate.quality.packing });
        arr1.push({ name: "skills", value: item.evaluate.quality.skills });
        arr1.push({ name: "quality", value: item.evaluate.quality.quality });
        arr1.push({ name: "clear", value: item.evaluate.quality.clear });
        temp.factoryname = item.factoryname;
        temp.amt = arr1;
        arr2.push(temp);
      });
      setEvaluate(arr2);
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    findProduct({
      variables: {
        cost: cost,
        quantity: quantity,
        leadTime: leadTime,
        product: product
      }
    });
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div
      className="container-fluid mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("find_factories_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="form-group col-md-2 mt-1">
            <h4 className="text-info">{LangInput("type_of_product")}</h4>
          </div>
          <div className="form-group col-md-3">
            <select
              className="form-control"
              type="text"
              value={product}
              onChange={e => setProduct(e.target.value)}
            >
              <option value="bag">Bag</option>
              <option value="box">Box</option>
              <option value="watch">Watch</option>
              <option value="shoe">Shoe</option>
              <option value="cup">Cup</option>
              <option value="shirt">Shirt</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 offset-md-1 px-0 mt-1">
            <h4 className="text-info float-right">{LangInput("cost")}</h4>
          </div>
          <div className="form-group col-md-3">
            <select
              className="form-control"
              type="text"
              value={cost}
              onChange={e => setCost(e.target.value)}
            >
              <option value="1-10">1 - 10 {LangInput("hkd")}</option>
              <option value="11-20">11 - 20 {LangInput("hkd")}</option>
              <option value="21-30">21 - 30 {LangInput("hkd")}</option>
              <option value="31-40">31 - 40 {LangInput("hkd")}</option>
              <option value="41-50">41 - 50 {LangInput("hkd")}</option>
              <option value="51-100">51 - 100 {LangInput("hkd")}</option>
              <option value="101-200">101 - 200 {LangInput("hkd")}</option>
              <option value="201-300">201 - 300 {LangInput("hkd")}</option>
              <option value="301-400">301 - 400 {LangInput("hkd")}</option>
              <option value="401-500">401 - 500 {LangInput("hkd")}</option>
              <option value="501">Above 500 {LangInput("hkd")}</option>
            </select>
          </div>
          <div className="form-group col-md-2 px-0 mt-1">
            <h4 className="text-info float-right">
              {LangInput("specific_cost")}
            </h4>
          </div>
          <div className="form-group col-md-2">
            <input
              className="form-control"
              type="text"
              name="cost"
              placeholder="Enter Cost"
              onChange={e => setCost(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 offset-md-1 px-0 mt-1">
            <h4 className="text-info float-right">{LangInput("quantity")}</h4>
          </div>
          <div className="form-group col-md-3">
            <select
              className="form-control"
              type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            >
              <option value="1-50">1 - 50</option>
              <option value="51-100">51 - 100</option>
              <option value="101-200">101 - 200</option>
              <option value="201-300">201 - 300</option>
              <option value="301-400">301 - 400</option>
              <option value="401-500">401 - 500</option>
              <option value="501-1000">501 - 1000</option>
              <option value="1001-2000">1001 - 2000</option>
              <option value="2001-5000">2001 - 5000</option>
              <option value="5001">Above 5000</option>
            </select>
          </div>
          <div className="form-group col-md-2 px-0 mt-1">
            <h4 className="text-info float-right">
              {LangInput("specific_quantity")}
            </h4>
          </div>
          <div className="form-group col-md-2">
            <input
              className="form-control"
              type="text"
              name="quantity"
              placeholder="Enter Quantity"
              onChange={e => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 offset-md-1 px-0 mt-1">
            <h4 className="text-info float-right">{LangInput("lead_time")}</h4>
          </div>
          <div className="form-group col-md-3">
            <select
              className="form-control"
              type="text"
              value={leadTime}
              onChange={e => setLeadTime(e.target.value)}
            >
              <option value="1-3">1 - 3 {LangInput("day")}</option>
              <option value="3-7">3 - 7 {LangInput("day")}</option>
              <option value="7-14">7 - 14 {LangInput("day")}</option>
              <option value="15-21">15 - 21 {LangInput("day")}</option>
              <option value="21-30">21 - 30 {LangInput("day")}</option>
              <option value="31-60">31 - 60 {LangInput("day")}</option>
            </select>
          </div>
          <div className="form-group col-md-2 px-0 mt-1">
            <h4 className="text-info float-right">
              {LangInput("specific_lead_time")}
            </h4>
          </div>
          <div className="form-group col-md-2">
            <input
              className="form-control"
              type="text"
              name="leadTime"
              placeholder="Enter Lead Time"
              onChange={e => setLeadTime(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-outline-info mx-auto w-25">
            {LangInput("submit")}
          </button>
        </div>
      </form>
      <table className="table table-hover table-borderless my-5 py-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">{LangInput("priority")}</th>
            <th scope="col">{LangInput("name")}</th>
            <th scope="col">{LangInput("location")}</th>
            <th scope="col">{LangInput("details")}</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((factory, key) => {
              return (
                <tr key={key}>
                  <th>
                    {key + 1} ({factory.ranking})
                  </th>
                  <th>
                    <div className="text-info">{factory.factoryname}</div>
                  </th>
                  <th>
                    <div className="text-info">
                      {factory.search.location}
                    </div>
                  </th>
                  <th>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      data-toggle="modal"
                      data-target="#evaluate_graph"
                    >
                      {LangInput("details")}
                    </button>
                  </th>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="evaluate_graph"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right mt-1 mr-2"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <BarChart evaluate={evaluate} />
          </div>
        </div>
      </div>
    </div>
  );
};
