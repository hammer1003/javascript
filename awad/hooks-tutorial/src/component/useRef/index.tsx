import React, { useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState<string>("");

  const inputRef = useRef<any>();

  return (
    <>
      <button
        onClick={() => {
          console.log("inputRef", inputRef.current);
          inputRef.current.focus();
        }}
      >
        useRef
      </button>
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

export default UseRef;
