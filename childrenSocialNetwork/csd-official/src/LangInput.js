import { useContext } from "react";
import { LangContext } from "./Lang";

const LangInput = (props) => {
  const { en, zh, langChange } = useContext(LangContext);

  return langChange === "en" ? en[props] : zh[props];
};

export default LangInput;
