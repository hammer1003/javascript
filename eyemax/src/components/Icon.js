import React from "react";

const Icon = (iclass, left, right) => {
  return (
    <i
      className={`${iclass}`}
      style={{ marginLeft: left, marginRight: right }}
      aria-hidden="true"
    ></i>
  );
};

export default Icon;
