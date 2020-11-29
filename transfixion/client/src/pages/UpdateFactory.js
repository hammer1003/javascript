import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";
import ProductForm from "../components/ProductForm";
import { zero } from "../util";

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

  const [factory, { loading, error }] = useMutation(GET_FACTORY, {
    onCompleted({ factory }) {
      const { message, isSuccess, factoryInfo } = factory;
      console.log("factoryInfo", factoryInfo);
      if (!isSuccess) {
        alert.show(message, {
          type: "error"
        });
        setTimeout(() => window.location.reload(), 5000);
      }
      if (isSuccess) {
        setFactoryName(factoryInfo.factoryname);
        setEmail(factoryInfo.email);
        setLocation(factoryInfo.search.location);

        setContactPerson(factoryInfo.search.contactPerson);
        setContactTel(factoryInfo.search.contactTel);
        setItems(factoryInfo.search.items.join(" "));

        setCostMin(factoryInfo.search.cost.min);
        setCostMax(factoryInfo.search.cost.max);
        setQuantityMin(factoryInfo.search.quantity.min);
        setQuantityMax(factoryInfo.search.quantity.max);
        setLeadTimeMin(factoryInfo.search.leadTime.min);
        setLeadTimeMax(factoryInfo.search.leadTime.max);

        setFactorynameValid(true);
        setEmailValid(true);
        setLocationValid(true);
        setContactPersonValid(true);
        setContactTelValid(true);
        setItemsValid(true);
        setCostMinValid(true);
        setCostMaxValid(true);
        setQuantityMinValid(true);
        setQuantityMaxValid(true);
        setLeadTimeMinValid(true);
        setLeadTimeMaxValid(true);
      }
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

  return (
    <div
      className="container-fluid mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("update_factory_page")}</h1>
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
      <ProductForm
        factoryname={factoryname}
        setFactoryName={setFactoryName}
        email={email}
        setEmail={setEmail}
        location={location}
        setLocation={setLocation}
        contactPerson={contactPerson}
        setContactPerson={setContactPerson}
        contactTel={contactTel}
        setContactTel={setContactTel}
        items={items}
        setItems={setItems}
        factorynameValid={factorynameValid}
        setFactorynameValid={setFactorynameValid}
        emailValid={emailValid}
        setEmailValid={setEmailValid}
        locationValid={locationValid}
        setLocationValid={setLocationValid}
        contactPersonValid={contactPersonValid}
        setContactPersonValid={setContactPersonValid}
        contactTelValid={contactTelValid}
        setContactTelValid={setContactTelValid}
        itemsValid={itemsValid}
        setItemsValid={setItemsValid}
        costMinValid={costMinValid}
        setCostMinValid={setCostMinValid}
        costMaxValid={costMaxValid}
        setCostMaxValid={setCostMaxValid}
        quantityMinValid={quantityMinValid}
        setQuantityMinValid={setQuantityMinValid}
        quantityMaxValid={quantityMaxValid}
        setQuantityMaxValid={setQuantityMaxValid}
        leadTimeMinValid={leadTimeMinValid}
        setLeadTimeMinValid={setLeadTimeMinValid}
        leadTimeMaxValid={leadTimeMaxValid}
        setLeadTimeMaxValid={setLeadTimeMaxValid}
        costMin={costMin}
        setCostMin={setCostMin}
        costMax={costMax}
        setCostMax={setCostMax}
        quantityMin={quantityMin}
        setQuantityMin={setQuantityMin}
        quantityMax={quantityMax}
        setQuantityMax={setQuantityMax}
        leadTimeMin={leadTimeMin}
        setLeadTimeMin={setLeadTimeMin}
        leadTimeMax={leadTimeMax}
        setLeadTimeMax={setLeadTimeMax}
      />
    </div>
  );
};
