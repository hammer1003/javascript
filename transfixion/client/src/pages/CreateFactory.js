import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";
import { eleven, five, optionLoop, zero } from "../util";

const CREATE_FACTORY = gql`
  mutation createFactory(
    $factoryname: String!
    $email: String!
    $ranking: String!
    $search: SearchInput!
    $evaluate: EvaluateInput!
  ) {
    createFactory(
      factoryname: $factoryname
      email: $email
      ranking: $ranking
      search: $search
      evaluate: $evaluate
    ) {
      message
      isSuccess
    }
  }
`;

export default () => {
  const alert = useAlert();

  const [factoryname, setFactoryName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactTel, setContactTel] = useState("");
  const [items, setItems] = useState("");

  const [factorynameValid, setFactorynameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [locationValid, setLocationValid] = useState(false);
  const [contactPersonValid, setContactPersonValid] = useState(false);
  const [contactTelValid, setContactTelValid] = useState(false);
  const [itemsValid, setItemsValid] = useState(false);
  const [costMinValid, setCostMinValid] = useState(false);
  const [costMaxValid, setCostMaxValid] = useState(false);
  const [quantityMinValid, setQuantityMinValid] = useState(false);
  const [quantityMaxValid, setQuantityMaxValid] = useState(false);
  const [leadTimeMinValid, setLeadTimeMinValid] = useState(false);
  const [leadTimeMaxValid, setLeadTimeMaxValid] = useState(false);

  const [costMin, setCostMin] = useState(zero);
  const [costMax, setCostMax] = useState(zero);
  const [quantityMin, setQuantityMin] = useState(zero);
  const [quantityMax, setQuantityMax] = useState(zero);
  const [leadTimeMin, setLeadTimeMin] = useState(zero);
  const [leadTimeMax, setLeadTimeMax] = useState(zero);

  const [inquiryCost, setInquiryCost] = useState(five);
  const [inquiryQuantity, setInquiryQuantity] = useState(five);
  const [inquiryLeadTime, setInquiryLeadTime] = useState(five);

  const [serviceCooperation, setServiceCooperation] = useState(five);
  const [serviceSpeed, setServiceSpeed] = useState(five);
  const [servicePotential, setServicePotential] = useState(five);
  const [serviceAfterService, setServiceAfterService] = useState(five);
  const [serviceComplement, setServiceComplement] = useState(five);

  const [realiabilityScale, setRealiabilityScale] = useState(five);
  const [realiabilityReputation, setRealiabilityReputation] = useState(five);
  const [realiabilityAuditReport, setRealiabilityAuditReport] = useState(five);
  const [realiabilityLocation, setRealiabilityLocation] = useState(five);

  const [qualitySkills, setQualitySkills] = useState(five);
  const [qualityClear, setQualityClear] = useState(five);
  const [qualityQuality, setQualityQuality] = useState(five);
  const [qualityPrinting, setQualityPrinting] = useState(five);
  const [qualityPacking, setQualityPacking] = useState(five);

  let average =
    (inquiryCost +
      inquiryQuantity +
      inquiryLeadTime +
      serviceCooperation +
      serviceSpeed +
      servicePotential +
      serviceAfterService +
      serviceComplement +
      realiabilityScale +
      realiabilityReputation +
      realiabilityAuditReport +
      realiabilityLocation +
      qualitySkills +
      qualityClear +
      qualityQuality +
      qualityPrinting +
      qualityPacking) /
    17;

  const [ranking, setRanking] = useState(average.toString());

  useEffect(() => setRanking(average.toString()), [average]);

  const [createFactory, { loading, error }] = useMutation(CREATE_FACTORY, {
    onCompleted({ createFactory }) {
      const { isSuccess, message } = createFactory;
      alert.show(message, {
        type: "success"
      });

      if (!isSuccess)
        alert.show(message, {
          type: "error"
        });

      setTimeout(() => window.location.reload(), 5000);
    }
  });

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "factoryname":
        setFactoryName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "contactPerson":
        setContactPerson(value);
        break;
      case "contactTel":
        setContactTel(value.toString());
        break;
      case "items":
        setItems(value.split(" "));
        break;
      case "costMin":
        setCostMin(parseInt(value));
        break;
      case "costMax":
        setCostMax(parseInt(value));
        break;
      case "quantityMin":
        setQuantityMin(parseInt(value));
        break;
      case "quantityMax":
        setQuantityMax(parseInt(value));
        break;
      case "leadTimeMin":
        setLeadTimeMin(parseInt(value));
        break;
      case "leadTimeMax":
        setLeadTimeMax(parseInt(value));
        break;
      default:
        break;
    }
    fieldValidator(name, value);
  };

  const fieldValidator = (fieldName, value) => {
    switch (fieldName) {
      case "factoryname":
        setFactorynameValid(() => value.length > 0);
        break;
      case "email":
        setEmailValid(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
        break;
      case "location":
        setLocationValid(value.length > 0);
        break;
      case "contactPerson":
        setContactPersonValid(() => value.length > 0);
        break;
      case "contactTel":
        setContactTelValid(() => value.length > 0);
        break;
      case "items":
        setItemsValid(value.length > 0);
        break;
      case "costMin":
        setCostMinValid(value > 0);
        break;
      case "costMax":
        setCostMaxValid(value > 0);
        break;
      case "quantityMin":
        setQuantityMinValid(value > 0);
        break;
      case "quantityMax":
        setQuantityMaxValid(value > 0);
        break;
      case "leadTimeMin":
        setLeadTimeMinValid(value > 0);
        break;
      case "leadTimeMax":
        setLeadTimeMaxValid(value > 0);
        break;
      default:
        break;
    }
  };

  const extraLabel = validator => (validator ? "text-success" : "text-danger");
  const extraInput = validator =>
    validator ? "border border-success" : "border border-danger";

  const handleSubmit = e => {
    e.preventDefault();

    if (!factoryname) {
      alert.show("No Factory Name", { type: "error" });
      return;
    }
    if (!email) {
      alert.show("No Email", { type: "error" });
      return;
    }
    if (!location) {
      alert.show("No Location", { type: "error" });
      return;
    }
    if (!contactPerson) {
      alert.show("No Contact Person", { type: "error" });
      return;
    }
    if (!contactTel) {
      alert.show("No Contact Person Telephone", { type: "error" });
      return;
    }
    if (!items) {
      alert.show("No Items", { type: "error" });
      return;
    }
    if (!costMin) {
      alert.show("No Minimun Cost", { type: "error" });
      return;
    }
    if (!costMax) {
      alert.show("No Maximun Cost", { type: "error" });
      return;
    }
    if (!quantityMin) {
      alert.show("No Minimun Quantity", { type: "error" });
      return;
    }
    if (!quantityMax) {
      alert.show("No Maximun Quantity", { type: "error" });
      return;
    }
    if (!leadTimeMin) {
      alert.show("No Minimun Lead Time", { type: "error" });
      return;
    }
    if (!leadTimeMax) {
      alert.show("No Maximun lead Time", { type: "error" });
      return;
    }

    if (costMin >= costMax) {
      alert.show("Minimun Cost is larger or equal than Maximum Cost", {
        type: "error"
      });
      return;
    }

    if (quantityMin >= quantityMax) {
      alert.show("Minimun Quantity is larger or equal than Maximum Quantity", {
        type: "error"
      });
      return;
    }

    if (leadTimeMin >= leadTimeMax) {
      alert.show(
        "Minimun Lead Time is larger or equal than Maximum Lead Time",
        { type: "error" }
      );
      return;
    }

    createFactory({
      variables: {
        factoryname: factoryname,
        email: email,
        ranking: ranking,
        search: {
          location: location,
          contactPerson: contactPerson,
          contactTel: contactTel,
          cost: { max: costMax, min: costMin },
          quantity: { max: quantityMax, min: quantityMin },
          leadTime: { max: leadTimeMax, min: leadTimeMin },
          items: items
        },
        evaluate: {
          inquiry: {
            cost: inquiryCost,
            quantity: inquiryQuantity,
            leadTime: inquiryLeadTime
          },
          service: {
            cooperation: serviceCooperation,
            speed: serviceSpeed,
            potential: servicePotential,
            afterService: serviceAfterService,
            complement: serviceComplement
          },
          realiability: {
            reputation: realiabilityReputation,
            scale: realiabilityScale,
            auditReport: realiabilityAuditReport,
            location: realiabilityLocation
          },
          quality: {
            printing: qualityPrinting,
            packing: qualityPacking,
            skills: qualitySkills,
            quality: qualityQuality,
            clear: qualityClear
          }
        }
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
      <h1 className="text-center mt-5">{LangInput("create_factory_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={handleSubmit}>
        <h2 className="text-info">Details: </h2>
        <div className="row">
          <div
            className={`form-group col-md-1 pr-0 pt-2 ${extraLabel(
              factorynameValid
            )}`}
          >
            <label>{LangInput("factory_name")}</label>
          </div>
          <div className="form-group col-md-3">
            <input
              className={`form-control ${extraInput(factorynameValid)}`}
              type="text"
              name="factoryname"
              placeholder="Factory Name"
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 pr-0 pt-2 ${extraLabel(
              emailValid
            )}`}
          >
            <label className="float-right">{LangInput("email")}</label>
          </div>
          <div className="form-group col-md-3">
            <input
              className={`form-control ${extraInput(emailValid)}`}
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 pr-0 pt-2 ${extraLabel(
              locationValid
            )}`}
          >
            <label className="float-right">{LangInput("location")}</label>
          </div>
          <div className="form-group col-md-3">
            <input
              className={`form-control ${extraInput(locationValid)}`}
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="row">
          <div
            className={`form-group col-md-1 px-0 pt-2 ${extraLabel(
              contactPersonValid
            )}`}
          >
            <label className="float-right">{LangInput("contact_person")}</label>
          </div>
          <div className="form-group col-md-3">
            <input
              className={`form-control ${extraInput(contactPersonValid)}`}
              name="contactPerson"
              type="text"
              placeholder="Contact Person"
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 px-0 pt-2 ${extraLabel(
              contactTelValid
            )}`}
          >
            <label className="float-right">{LangInput("contact_tel")}</label>
          </div>
          <div className="form-group col-md-3">
            <input
              className={`form-control ${extraInput(contactTelValid)}`}
              name="contactTel"
              type="number"
              min="0"
              placeholder="Contact Person Telephone"
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 pr-0 pt-2 ${extraLabel(
              itemsValid
            )}`}
          >
            <label className="float-right">{LangInput("items")}</label>
          </div>
          <div className="form-group col-md-3">
            <input
              className={`form-control ${extraInput(itemsValid)}`}
              name="items"
              type="text"
              placeholder="Space for Separation"
              onChange={inputHandler}
            />
          </div>
        </div>
        <h2 className="text-info"> {LangInput("for_searching")}</h2>
        <div className="row">
          <div className="form-group col-md-2 mx-0 pt-1 mt-3 ">
            <h4 className="text-info"> {LangInput("cost_hkd")}</h4>
          </div>
          <div
            className={`form-group col-md-1 mx-0 mt-4 ${extraLabel(
              costMinValid
            )}`}
          >
            <label className="float-right"> {LangInput("minimum")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className={`form-control ${extraInput(costMinValid)}`}
              type="number"
              name="costMin"
              placeholder="Cost"
              min="0"
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 mx-0 mt-4 ${extraLabel(
              costMaxValid
            )}`}
          >
            <label className="float-right"> {LangInput("maximum")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className={`form-control ${extraInput(costMaxValid)}`}
              type="number"
              name="costMax"
              placeholder="Cost"
              min="0"
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("quantity")}</h4>
          </div>
          <div
            className={`form-group col-md-1 mx-0 mt-4 ${extraLabel(
              quantityMinValid
            )}`}
          >
            <label className="float-right">{LangInput("minimum")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className={`form-control ${extraInput(quantityMinValid)}`}
              type="number"
              name="quantityMin"
              placeholder="Quantity"
              min="0"
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 mx-0 mt-4 ${extraLabel(
              quantityMaxValid
            )}`}
          >
            <label className="float-right">{LangInput("maximum")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className={`form-control ${extraInput(quantityMaxValid)}`}
              type="number"
              name="quantityMax"
              placeholder="Quantity"
              min="0"
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("lead_time_day")}</h4>
          </div>
          <div
            className={`form-group col-md-1 mx-0 mt-4 ${extraLabel(
              leadTimeMinValid
            )}`}
          >
            <label className="float-right">{LangInput("minimum")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className={`form-control ${extraInput(leadTimeMinValid)}`}
              type="number"
              name="leadTimeMin"
              placeholder="Lead Time"
              onChange={inputHandler}
            />
          </div>
          <div
            className={`form-group col-md-1 mx-0 mt-4 ${extraLabel(
              leadTimeMaxValid
            )}`}
          >
            <label className="float-right">{LangInput("maximum")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className={`form-control ${extraInput(leadTimeMaxValid)}`}
              type="number"
              name="leadTimeMax"
              placeholder="Lead Time"
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="row">
          <h2 className="text-info col-md-2 mt-2">
            {LangInput("for_analysis")}
          </h2>
          <div className="form-group col-md-6 mx-0 mt-4">
            <label className="text-success">{LangInput("note_analysis")}</label>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("ranking")}</h4>
          </div>
          <div className="form-group col-md-2 mx-0 mt-4">
            <input
              className="form-control"
              type="text"
              name="ranking"
              placeholder="Ranking"
              value={ranking}
              disabled
            />
          </div>
          <div className="form-group col-md-6 mx-0 pt-1 mt-4">
            <label className="text-success">{LangInput("note_ranking")} </label>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-1 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("inquiry")}</h4>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("cost")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={inquiryCost}
              onChange={e => setInquiryCost(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("quantity")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={inquiryQuantity}
              onChange={e => setInquiryQuantity(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("lead_time")}</label>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={inquiryLeadTime}
              onChange={e => setInquiryLeadTime(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-1 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("realiability")}</h4>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("scale")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={realiabilityScale}
              onChange={e => setRealiabilityScale(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("location")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={realiabilityLocation}
              onChange={e => setRealiabilityLocation(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("reputation")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={realiabilityReputation}
              onChange={e =>
                setRealiabilityReputation(parseInt(e.target.value))
              }
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 px-0 mt-4">
            <label className="float-right">{LangInput("audit_report")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={realiabilityAuditReport}
              onChange={e =>
                setRealiabilityAuditReport(parseInt(e.target.value))
              }
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-1 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("service")}</h4>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("speed")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={serviceSpeed}
              onChange={e => setServiceSpeed(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("potential")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={servicePotential}
              onChange={e => setServicePotential(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("complement")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={serviceComplement}
              onChange={e => setServiceComplement(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 px-0 mt-4">
            <label className="float-right">{LangInput("cooperation")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={serviceCooperation}
              onChange={e => setServiceCooperation(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 px-0 mt-4">
            <label className="float-right">{LangInput("after_service")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={serviceAfterService}
              onChange={e => setServiceAfterService(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-1 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("quality")}</h4>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("skills")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={qualitySkills}
              onChange={e => setQualitySkills(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("clear")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={qualityClear}
              onChange={e => setQualityClear(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("quality")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={qualityQuality}
              onChange={e => setQualityQuality(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("printing")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={qualityPrinting}
              onChange={e => setQualityPrinting(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
          <div className="form-group col-md-1 mx-0 mt-4">
            <label className="float-right">{LangInput("packing")}</label>
          </div>
          <div className="form-group col-md-1 mx-0 mt-3">
            <select
              className="form-control"
              type="number"
              value={qualityPacking}
              onChange={e => setQualityPacking(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
        </div>
        <div className="row">
          <button
            type="submit"
            className="btn btn-outline-info offset-md-3 w-50"
          >
            {LangInput("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};
