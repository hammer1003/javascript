import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";
import { eleven, optionLoop } from "../util";

const UPDATE_ANALYSIS = gql`
  mutation updateAnalysis(
    $email: String!
    $ranking: String!
    $evaluate: EvaluateInput!
  ) {
    updateAnalysis(email: $email, ranking: $ranking, evaluate: $evaluate) {
      message
      isSuccess
    }
  }
`;

export default props => {
  const alert = useAlert();

  const {
    factoryname,
    factoryemail,
    ranking,
    cost,
    quantity,
    leadTime,
    cooperation,
    speed,
    potential,
    afterService,
    complement,
    reputation,
    scale,
    auditReport,
    location,
    printing,
    packing,
    skills,
    quality,
    clear,
    setCost,
    setQuantity,
    setLeadTime,
    setScale,
    setLocation,
    setReputation,
    setAuditReport,
    setSpeed,
    setPotential,
    setComplement,
    setCooperation,
    setAfterService,
    setSkills,
    setClear,
    setQuality,
    setPrinting,
    setPacking
  } = props;
  const [updateAnalysis, { loading, error }] = useMutation(UPDATE_ANALYSIS, {
    onCompleted({ updateAnalysis }) {
      const { message, isSuccess } = updateAnalysis;
      if (!isSuccess)
        alert.show(message, {
          type: "error"
        });

      if (isSuccess) {
        alert.show(message, {
          type: "success"
        });
        setTimeout(() => window.location.reload(), 5000);
      }
    }
  });
  const submitHandler = e => {
    e.preventDefault();
    updateAnalysis({
      variables: {
        email: factoryemail,
        ranking: ranking,
        evaluate: {
          inquiry: {
            cost: cost,
            quantity: quantity,
            leadTime: leadTime
          },
          service: {
            cooperation: cooperation,
            speed: speed,
            potential: potential,
            afterService: afterService,
            complement: complement
          },
          realiability: {
            reputation: reputation,
            scale: scale,
            auditReport: auditReport,
            location: location
          },
          quality: {
            printing: printing,
            packing: packing,
            skills: skills,
            quality: quality,
            clear: clear
          }
        }
      }
    });
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className="container-fluid mb-5 pb-5">
      <form onSubmit={submitHandler}>
        <div className="row">
          <h2 className="text-info">{LangInput("for_analysis")}</h2>
          <div className="form-group col-md-6 mx-0 mt-3">
            <label className="text-success">{LangInput("note_analysis")}</label>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-2 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("factory_name")}</h4>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className="form-control"
              type="text"
              name="factoryname"
              placeholder="Factory Name"
              value={factoryname}
              disabled
            />
          </div>
          <div className="form-group col-md-2 mx-0 pt-1 mt-3">
            <h4 className="text-info">{LangInput("factory_email")}</h4>
          </div>
          <div className="form-group col-md-2 mx-0 mt-3">
            <input
              className="form-control"
              type="email"
              name="factoryemail"
              placeholder="Factory Email"
              value={factoryemail}
              disabled
            />
          </div>
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
              value={cost}
              onChange={e => setCost(parseInt(e.target.value))}
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
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value))}
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
              value={leadTime}
              onChange={e => setLeadTime(parseInt(e.target.value))}
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
              value={scale}
              onChange={e => setScale(parseInt(e.target.value))}
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
              value={location}
              onChange={e => setLocation(parseInt(e.target.value))}
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
              value={reputation}
              onChange={e => setReputation(parseInt(e.target.value))}
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
              value={auditReport}
              onChange={e => setAuditReport(parseInt(e.target.value))}
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
              value={speed}
              onChange={e => setSpeed(parseInt(e.target.value))}
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
              value={potential}
              onChange={e => setPotential(parseInt(e.target.value))}
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
              value={complement}
              onChange={e => setComplement(parseInt(e.target.value))}
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
              value={cooperation}
              onChange={e => setCooperation(parseInt(e.target.value))}
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
              value={afterService}
              onChange={e => setAfterService(parseInt(e.target.value))}
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
              value={skills}
              onChange={e => setSkills(parseInt(e.target.value))}
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
              value={clear}
              onChange={e => setClear(parseInt(e.target.value))}
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
              value={quality}
              onChange={e => setQuality(parseInt(e.target.value))}
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
              value={printing}
              onChange={e => setPrinting(parseInt(e.target.value))}
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
              value={packing}
              onChange={e => setPacking(parseInt(e.target.value))}
            >
              {optionLoop(eleven).map(option => option)}
            </select>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-outline-info mx-auto w-25">
            {LangInput("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};
