import React, { useEffect, useRef, useState } from "react";

const ClosureProblem = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  countRef.current = count;

  useEffect(() => {
    setTimeout(() => {
      // alert("You clicked on: " + countRef.current);
      alert("You clicked on: " + countRef.current);
    }, 3000);
  }, []);

  // const handleAlertClick = () => {
  //   setTimeout(() => {
  //     alert("You clicked on: " + countRef.current);
  //   }, 3000);
  // };

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Click me
      </button>
      {/* <button onClick={handleAlertClick}>Show alert</button> */}
    </>
  );
};

export default ClosureProblem;
