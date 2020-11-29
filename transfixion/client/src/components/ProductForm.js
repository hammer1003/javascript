import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";

const UPDATE_FACTORY = gql`
  mutation updateFactory(
    $factoryname: String!
    $email: String!
    $search: SearchInput!
  ) {
    updateFactory(factoryname: $factoryname, email: $email, search: $search) {
      message
      isSuccess
    }
  }
`;

export default props => {
  const alert = useAlert();

  const {
    factoryname,
    setFactoryName,
    email,
    setEmail,
    location,
    setLocation,
    contactPerson,
    setContactPerson,
    contactTel,
    setContactTel,
    items,
    setItems,
    factorynameValid,
    setFactorynameValid,
    emailValid,
    setEmailValid,
    locationValid,
    setLocationValid,
    contactPersonValid,
    setContactPersonValid,
    contactTelValid,
    setContactTelValid,
    itemsValid,
    setItemsValid,
    costMinValid,
    setCostMinValid,
    costMaxValid,
    setCostMaxValid,
    quantityMinValid,
    setQuantityMinValid,
    quantityMaxValid,
    setQuantityMaxValid,
    leadTimeMinValid,
    setLeadTimeMinValid,
    leadTimeMaxValid,
    setLeadTimeMaxValid,
    costMin,
    setCostMin,
    costMax,
    setCostMax,
    quantityMin,
    setQuantityMin,
    quantityMax,
    setQuantityMax,
    leadTimeMin,
    setLeadTimeMin,
    leadTimeMax,
    setLeadTimeMax
  } = props;
  // inquiry@tokyohappy.com

  const [updateFactory, { loading, error }] = useMutation(UPDATE_FACTORY, {
    onCompleted({ updateFactory }) {
      console.log("updateFactory", updateFactory);
      const { isSuccess, message } = updateFactory;
      if (!isSuccess)
        alert.show(message, {
          type: "error"
        });
      if (isSuccess)
        alert.show(message, {
          type: "success"
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

    console.log("leadTimeMin", leadTimeMin);
    console.log("leadTimeMax", leadTimeMax);

    updateFactory({
      variables: {
        factoryname: factoryname,
        email: email,
        search: {
          location: location,
          contactPerson: contactPerson,
          contactTel: contactTel,
          cost: { max: costMax, min: costMin },
          quantity: { max: quantityMax, min: quantityMin },
          leadTime: { max: leadTimeMax, min: leadTimeMin },
          items: items
        }
      }
    });
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;

  return (
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
            value={factoryname}
            onChange={inputHandler}
          />
        </div>
        <div
          className={`form-group col-md-1 pr-0 pt-2 ${extraLabel(emailValid)}`}
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
            disabled
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
            value={contactPerson}
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
            value={contactTel}
            onChange={inputHandler}
          />
        </div>
        <div
          className={`form-group col-md-1 pr-0 pt-2 ${extraLabel(itemsValid)}`}
        >
          <label className="float-right">{LangInput("items")}</label>
        </div>
        <div className="form-group col-md-3">
          <input
            className={`form-control ${extraInput(itemsValid)}`}
            name="items"
            type="text"
            placeholder="Space for Separation"
            value={items}
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
            value={costMin}
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
            value={costMax}
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
            value={quantityMin}
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
            value={quantityMax}
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
            value={leadTimeMin}
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
            value={leadTimeMax}
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className="row">
        <button type="submit" className="btn btn-outline-info mx-auto w-25">
          {LangInput("submit")}
        </button>
      </div>
    </form>
  );
};
