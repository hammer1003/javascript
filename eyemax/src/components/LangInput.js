import { useContext } from "react";
import { LangContext } from "../Lang";

const LangInput = props => {
  const { en, tc, zh, langChange } = useContext(LangContext);

  return langChange === "en"
    ? en[props]
    : langChange === "tc"
    ? tc[props]
    : zh[props];
};

export default LangInput;
