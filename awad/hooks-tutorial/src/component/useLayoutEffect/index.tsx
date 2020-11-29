import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [name, setName] = useState<string>("");

  const inputRef = useRef<any>();

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <>
      <button onClick={() => inputRef.current.focus()}>useRef</button>
      <input
        ref={inputRef}
        name="email"
        value={name}
        onClick={(e: any) => setName(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={name}
        onClick={(e: any) => setName(e.target.value)}
      />
    </>
  );
};

export default UseLayoutEffect;
