import React from "react";

export default () => {
  return (
    <div
      className="container"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      System Log
    </div>
  );
};
