import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import AnalysisForm from "../components/AnalysisForm";
import LangInput from "../components/LangInput";
import { zero } from "../util";

const FACTORY = gql`
  mutation factory($email: String!) {
    factory(email: $email) {
      message
      isSuccess
      factoryInfo {
        factoryname
        email
        ranking
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

  const [factoryname, setFactoryname] = useState("");
  const [factoryemail, setFactoryemail] = useState("");

  const [cost, setCost] = useState(zero);
  const [quantity, setQuantity] = useState(zero);
  const [leadTime, setLeadTime] = useState(zero);

  const [cooperation, setCooperation] = useState(zero);
  const [speed, setSpeed] = useState(zero);
  const [potential, setPotential] = useState(zero);
  const [afterService, setAfterService] = useState(zero);
  const [complement, setComplement] = useState(zero);

  const [reputation, setReputation] = useState(zero);
  const [scale, setScale] = useState(zero);
  const [auditReport, setAuditReport] = useState(zero);
  const [location, setLocation] = useState(zero);

  const [printing, setPrinting] = useState(zero);
  const [packing, setPacking] = useState(zero);
  const [skills, setSkills] = useState(zero);
  const [quality, setQuality] = useState(zero);
  const [clear, setClear] = useState(zero);

  const [factory, { loading, error }] = useMutation(FACTORY, {
    onCompleted({ factory }) {
      const { message, isSuccess, factoryInfo } = factory;
      if (!isSuccess) {
        alert.show(message, {
          type: "error"
        });
        setTimeout(() => window.location.reload(), 5000);
      }
      if (isSuccess) {
        setFactoryname(factoryInfo.factoryname);
        setFactoryemail(factoryInfo.email);
        setRanking(factoryInfo.ranking);

        setCost(factoryInfo.evaluate.inquiry.cost);
        setQuantity(factoryInfo.evaluate.inquiry.quantity);
        setLeadTime(factoryInfo.evaluate.inquiry.leadTime);

        setCooperation(factoryInfo.evaluate.service.cooperation);
        setSpeed(factoryInfo.evaluate.service.speed);
        setPotential(factoryInfo.evaluate.service.potential);
        setAfterService(factoryInfo.evaluate.service.afterService);
        setComplement(factoryInfo.evaluate.service.complement);

        setReputation(factoryInfo.evaluate.realiability.reputation);
        setScale(factoryInfo.evaluate.realiability.scale);
        setAuditReport(factoryInfo.evaluate.realiability.auditReport);
        setLocation(factoryInfo.evaluate.realiability.location);

        setPrinting(factoryInfo.evaluate.quality.printing);
        setPacking(factoryInfo.evaluate.quality.packing);
        setSkills(factoryInfo.evaluate.quality.skills);
        setQuality(factoryInfo.evaluate.quality.quality);
        setClear(factoryInfo.evaluate.quality.clear);
      }
    }
  });

  let average =
    (cost +
      quantity +
      leadTime +
      cooperation +
      speed +
      potential +
      afterService +
      complement +
      scale +
      reputation +
      auditReport +
      location +
      skills +
      clear +
      quality +
      printing +
      packing) /
    17;

  const [ranking, setRanking] = useState(average.toString());

  useEffect(() => setRanking(average.toString()), [average]);

  const searchHandler = e => {
    e.preventDefault();
    if (!factoryemail) {
      alert.show("Please type your Email!!!", { type: "error" });
      return;
    }
    factory({
      variables: {
        email: factoryemail
      }
    });
  };
  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div
      className="container-fluid"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("update_analysis_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={searchHandler}>
        <div className="row">
          <div className="form-group col-md-9">
            <input
              className="form-control form-control-underlined"
              type="email"
              placeholder="Factory Email"
              value={factoryemail}
              onChange={e => setFactoryemail(e.target.value)}
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
      <AnalysisForm
        factoryname={factoryname}
        factoryemail={factoryemail}
        ranking={ranking}
        cost={cost}
        setCost={setCost}
        quantity={quantity}
        setQuantity={setQuantity}
        leadTime={leadTime}
        setLeadTime={setLeadTime}
        cooperation={cooperation}
        setCooperation={setCooperation}
        speed={speed}
        setSpeed={setSpeed}
        potential={potential}
        setPotential={setPotential}
        afterService={afterService}
        setAfterService={setAfterService}
        complement={complement}
        setComplement={setComplement}
        reputation={reputation}
        setReputation={setReputation}
        scale={scale}
        setScale={setScale}
        auditReport={auditReport}
        setAuditReport={setAuditReport}
        location={location}
        setLocation={setLocation}
        printing={printing}
        setPrinting={setPrinting}
        packing={packing}
        setPacking={setPacking}
        skills={skills}
        setSkills={setSkills}
        quality={quality}
        setQuality={setQuality}
        clear={clear}
        setClear={setClear}
      />
    </div>
  );
};
