import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import "./styles.css";

const Count = memo(({ onOdd }: any) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);
  return (
    <div className="App">
      <div>count: {count}</div>
      <div>renders: {renders.current++}</div>
      <button
        onClick={() => {
          if (count % 2 === 0) {
            onOdd();
          }
          setCount(c => c + 1);
        }}
      >
        increment
      </button>
    </div>
  );
});

const OptimizeRenders = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const onOdd = useCallback(() => setText(""), [setText]);
  const data = useMemo(
    () => ({
      text2,
      isEven: text2.length % 2 === 0
    }),
    [text2]
  );

  return (
    <div className="App">
      <input
        placeholder="Not Render"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        placeholder="Will Render"
        value={text2}
        onChange={e => setText2(e.target.value)}
      />
      <Count onOdd={onOdd} data={data} />
    </div>
  );
};

export default OptimizeRenders;
