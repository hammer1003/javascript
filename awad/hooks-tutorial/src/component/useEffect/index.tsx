import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [showText, setShowText] = useState<boolean>(true);
  const [showHello, setShowHello] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [count, setCount] = useState<number>(
    JSON.parse(localStorage.getItem("count") || "0")
  );

  // useEffect(() => {
  //   const onMouseMove = (e: any) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mouseover", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mouseover", onMouseMove);
  //   };
  // }, [show]);

  useEffect(() => {
    setShowText(true);
    axios(`http://numbersapi.com/${count}/trivia`).then(res => {
      setData(res.data);
      setShowText(false);
    });
    localStorage.setItem("count", JSON.stringify(count));
    return () => {};
  }, [count, data]);

  return (
    <>
      <button onClick={() => setShowHello(cState => !cState)}>toggle</button>
      {showHello && <div>hello</div>}

      <button onClick={() => setCount(cState => cState + 1)}>+</button>
      <h1>{count}</h1>
      <h1>{showText ? "loading..." : data}</h1>
    </>
  );
};

export default UseEffect;
