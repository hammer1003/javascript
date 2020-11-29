import React, { useState } from "react";

interface ICount {
  count1: number;
  count2: number;
}

const UseState = () => {
  const [{ count1, count2 }, setCount] = useState<ICount>({
    count1: 10,
    count2: 20
  });
  const [count3, setCount3] = useState<number>(30);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <button
        onClick={() => {
          setCount((currentState: ICount) => ({
            ...currentState,
            count1: currentState.count1 + 1
          }));
          setCount3(c => c + 1);
        }}
      >
        +
      </button>
      <h1>count1: {count1}</h1>
      <h1>count2: {count2}</h1>
      <h1>count3: {count3}</h1>
      <input
        name="email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
    </>
  );
};

export default UseState;
