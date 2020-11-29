import React, { memo, useCallback, useRef, useState } from "react";

const Hello = memo(({ increment }: any) => {
  const renders = useRef(0);
  console.log("renders: ", renders.current++);
  return <button onClick={() => increment(5)}>hello</button>;
});

const Square = memo(({ n, increment }: any) => {
  const renders = useRef(0);
  console.log("renders: ", renders.current++);
  return <button onClick={() => increment(n)}>{n}</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState<number>(0);
  const favourite = [7, 21, 37];
  const increment = useCallback(
    n => {
      setCount(cState => cState + n);
    },
    [setCount]
  );

  return (
    <>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favourite.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </>
  );
};

export default UseCallback;
