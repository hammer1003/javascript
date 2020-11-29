import { useContext } from "react";
import { LangContext } from "../Lang";

export default props => {
  const { en } = useContext(LangContext);
  return en[props];
};
