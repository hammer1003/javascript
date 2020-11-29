import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import LangInput from "../components/LangInput";

const FACTORIES = gql`
  query factories {
    factories {
      id
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
`;

export default () => {
  const { loading, error, data } = useQuery(FACTORIES);

  if (loading) return <p>Loading......</p>;
  if (error) return <p>An error occurred</p>;
  if (data) console.log("data", data);

  return (
    <div
      className="container-fluid mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("show_factories_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <table className="table table-hover table-borderless mb-5 py-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">{LangInput("details")}</th>
            <th scope="col">{LangInput("search_info")}</th>
            <th scope="col">{LangInput("analysis_info")}</th>
          </tr>
        </thead>
        <tbody>
          {data && data.factories ? (
            data.factories.map(factory => {
              const cost = factory.search.cost;
              const quantity = factory.search.quantity;
              const leadTime = factory.search.leadTime;
              const inquiry = factory.evaluate.inquiry;
              const service = factory.evaluate.service;
              const realiability = factory.evaluate.realiability;
              const quality = factory.evaluate.quality;
              return (
                <tr key={factory.id}>
                  <th>
                    <div className="row ml-1">
                      {LangInput("name")}
                      &nbsp;
                      <div className="text-info">{factory.factoryname}</div>
                    </div>
                    <div className="row ml-1">
                      {LangInput("email")}
                      &nbsp;
                      <div className="text-info">{factory.email}</div>
                    </div>
                    <div className="row ml-1">
                      {LangInput("location")}
                      &nbsp;
                      <div className="text-info">{factory.search.location}</div>
                    </div>
                    <div className="row ml-1">
                      {LangInput("contact_person")}
                      &nbsp;
                      <div className="text-info">
                        {factory.search.contactPerson}
                      </div>
                    </div>
                    <div className="row ml-1">
                      {LangInput("contact_tel")}
                      &nbsp;
                      <div className="text-info">
                        {factory.search.contactTel}
                      </div>
                    </div>
                    <div className="row ml-1">
                      {LangInput("ranking")}
                      &nbsp;
                      <div className="text-info">{factory.ranking}</div>
                    </div>
                  </th>
                  <th>
                    <div className="row">
                      {LangInput("cost_hkd")}
                      &nbsp;
                      <div className="text-info">
                        {cost.min} - {cost.max}
                      </div>
                    </div>
                    <div className="row">
                      {LangInput("quantity")}
                      &nbsp;
                      <div className="text-info">
                        {quantity.min} - {quantity.max}
                      </div>
                    </div>
                    <div className="row">
                      {LangInput("lead_time_day")}
                      &nbsp;
                      <div className="text-info">
                        {leadTime.min} - {leadTime.max}
                      </div>
                    </div>
                    <div className="row">
                      {LangInput("items")}
                      &nbsp;
                      {factory.search.items.map((item, key) => (
                        <div className="text-info" key={key}>
                          {item}&nbsp;
                        </div>
                      ))}
                    </div>
                  </th>
                  <th>
                    <div className="row">
                      {LangInput("cost")}&nbsp;
                      <div className="text-info">{inquiry.cost}</div>&nbsp;
                      {LangInput("quantity")}&nbsp;
                      <div className="text-info">{inquiry.quantity}</div>&nbsp;
                      {LangInput("lead_time")}&nbsp;
                      <div className="text-info">{inquiry.leadTime}</div>
                    </div>
                    <div className="row">
                      {LangInput("scale")}&nbsp;
                      <div className="text-info">{realiability.scale}</div>
                      &nbsp;
                      {LangInput("location")}&nbsp;
                      <div className="text-info">{realiability.location}</div>
                      &nbsp;
                      {LangInput("reputation")}&nbsp;
                      <div className="text-info">{realiability.reputation}</div>
                      &nbsp;
                      {LangInput("audit_report")}&nbsp;
                      <div className="text-info">
                        {realiability.auditReport}
                      </div>
                      &nbsp;
                    </div>
                    <div className="row">
                      {LangInput("skills")}&nbsp;
                      <div className="text-info">{quality.skills}</div>&nbsp;
                      {LangInput("clear")}&nbsp;
                      <div className="text-info">{quality.clear}</div> &nbsp;
                      {LangInput("quality")}&nbsp;
                      <div className="text-info">{quality.quality}</div>&nbsp;
                      {LangInput("printing")}&nbsp;
                      <div className="text-info">{quality.printing}</div>
                      &nbsp;
                      {LangInput("packing")}&nbsp;
                      <div className="text-info">{quality.packing}</div>&nbsp;
                    </div>
                    <div className="row">
                      {LangInput("speed")}&nbsp;
                      <div className="text-info">{service.speed}</div>&nbsp;
                      {LangInput("potential")}&nbsp;
                      <div className="text-info">{service.potential}</div>&nbsp;
                      {LangInput("cooperation")}&nbsp;
                      <div className="text-info">{service.cooperation}</div>
                      &nbsp;
                      {LangInput("complement")}&nbsp;
                      <div className="text-info">{service.complement}</div>
                      &nbsp;
                      {LangInput("after_service")}&nbsp;
                      <div className="text-info">{service.afterService}</div>
                    </div>
                  </th>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
