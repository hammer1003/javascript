import React from "react";
import LangInput from "../components/LangInput";

export default () => {
  const destoryToken = () => {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <button onClick={destoryToken} className="btn btn-outline-info">
      {LangInput("logout")}
    </button>
  );
};
