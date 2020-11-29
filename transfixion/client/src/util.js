import React from "react";

export const optionLoop = time => {
  let options = [];
  for (let i = 0; i < time; i++) {
    options.push(<option key={i}>{i}</option>);
  }
  return options;
};

export const five = 5;
export const zero = 0;
export const eleven = 11;
