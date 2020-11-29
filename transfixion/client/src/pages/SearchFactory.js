import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";

const GET_FACTORY = gql`
  mutation factory($email: String!) {
    factory(email: $email) {
      message
      isSuccess
      factoryInfo {
        factoryname
        email
        ranking
        search {
          location
          contactPerson
          contactTel
          cost {
            max
            min
          }
          quantity {
            max
            min
          }
          leadTime {
            max
            min
          }
          items
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
  }
`;

export default () => {
  const alert = useAlert();
  const [email, setEmail] = useState("");

  const [data, setData] = useState();

  const [factory, { loading, error }] = useMutation(GET_FACTORY, {
    onCompleted({ factory }) {
      const { message, isSuccess, factoryInfo } = factory;
      if (!isSuccess) {
        alert.show(message, {
          type: "error"
        });
        setTimeout(() => window.location.reload(), 5000);
      }
      if (isSuccess) setData(factoryInfo);
    }
  });

  const searchHandler = e => {
    e.preventDefault();
    if (!email) {
      alert.show("Please type your Email!!!", { type: "error" });
      return;
    }
    factory({
      variables: {
        email: email
      }
    });
  };

  if (loading) return <p>Loading......</p>;
  if (error) return <p>An error occurred</p>;
  if (data) console.log("data", data);

  return (
    <div
      className="container-fluid mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("search_factory_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={searchHandler}>
        <div className="row">
          <div className="form-group col-md-9">
            <input
              className="form-control form-control-underlined"
              type="email"
              placeholder="Enter Email Address: "
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <button
              className="btn btn-primary rounded-pill btn-block shadow-sm"
              type="submit"
            >
              {LangInput("search")}
            </button>
          </div>
        </div>
      </form>
      <table className="table table-hover table-borderless mb-5 py-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">{LangInput("details")}</th>
            <th scope="col">{LangInput("search_info")}</th>
            <th scope="col">{LangInput("analysis_info")}</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            <tr>
              <th>
                <div className="row ml-1">
                  {LangInput("name")}
                  &nbsp;
                  <div className="text-info">{data.factoryname}</div>
                </div>
                <div className="row ml-1">
                  {LangInput("email")}
                  &nbsp;
                  <div className="text-info">{data.email}</div>
                </div>
                <div className="row ml-1">
                  {LangInput("location")}
                  &nbsp;
                  <div className="text-info">{data.search.location}</div>
                </div>
                <div className="row ml-1">
                  {LangInput("contact_person")}
                  &nbsp;
                  <div className="text-info">{data.search.contactPerson}</div>
                </div>
                <div className="row ml-1">
                  {LangInput("contact_tel")}
                  &nbsp;
                  <div className="text-info">{data.search.contactTel}</div>
                </div>
                <div className="row ml-1">
                  {LangInput("ranking")}
                  &nbsp;
                  <div className="text-info">{data.ranking}</div>
                </div>
              </th>
              <th>
                <div className="row">
                  {LangInput("cost_hkd")}
                  &nbsp;
                  <div className="text-info">
                    {data.search.cost.min} - {data.search.cost.max}
                  </div>
                </div>
                <div className="row">
                  {LangInput("quantity")}
                  &nbsp;
                  <div className="text-info">
                    {data.search.quantity.min} - {data.search.quantity.max}
                  </div>
                </div>
                <div className="row">
                  {LangInput("lead_time_day")}
                  &nbsp;
                  <div className="text-info">
                    {data.search.leadTime.min} - {data.search.leadTime.max}
                  </div>
                </div>
                <div className="row">
                  {LangInput("items")}
                  &nbsp;
                  {data.search.items.map((item, key) => (
                    <div className="text-info" key={key}>
                      {item}&nbsp;
                    </div>
                  ))}
                </div>
              </th>
              <th>
                <div className="row">
                  {LangInput("cost")}&nbsp;
                  <div className="text-info">{data.evaluate.inquiry.cost}</div>
                  &nbsp;
                  {LangInput("quantity")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.inquiry.quantity}
                  </div>
                  &nbsp;
                  {LangInput("lead_time")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.inquiry.leadTime}
                  </div>
                </div>
                <div className="row">
                  {LangInput("scale")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.realiability.scale}
                  </div>
                  &nbsp;
                  {LangInput("location")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.realiability.location}
                  </div>
                  &nbsp;
                  {LangInput("reputation")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.realiability.reputation}
                  </div>
                  &nbsp;
                  {LangInput("audit_report")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.realiability.auditReport}
                  </div>
                  &nbsp;
                </div>
                <div className="row">
                  {LangInput("skills")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.quality.skills}
                  </div>
                  &nbsp;
                  {LangInput("clear")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.quality.clear}
                  </div>{" "}
                  &nbsp;
                  {LangInput("quality")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.quality.quality}
                  </div>
                  &nbsp;
                  {LangInput("printing")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.quality.printing}
                  </div>
                  &nbsp;
                  {LangInput("packing")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.quality.packing}
                  </div>
                  &nbsp;
                </div>
                <div className="row">
                  {LangInput("speed")}&nbsp;
                  <div className="text-info">{data.evaluate.service.speed}</div>
                  &nbsp;
                  {LangInput("potential")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.service.potential}
                  </div>
                  &nbsp;
                  {LangInput("cooperation")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.service.cooperation}
                  </div>
                  &nbsp;
                  {LangInput("complement")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.service.complement}
                  </div>
                  &nbsp;
                  {LangInput("after_service")}&nbsp;
                  <div className="text-info">
                    {data.evaluate.service.afterService}
                  </div>
                </div>
              </th>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
