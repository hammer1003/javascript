import React from "react";
import "./styles.css";

const ImRecursive = ({ child = false }) => (
  <div className={child ? "parent" : "child"}>
    <p>I'm the {child ? "parent" : "child"} div</p>
    {child && <ImRecursive />}
  </div>
);

const Recursive = () => (
  <div className="App">
    <ImRecursive child={true} />
  </div>
);

export default Recursive;
