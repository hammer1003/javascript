import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setShow(true);
    axios(
      "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
    ).then(res => {
      setData(res.data);
      setShow(false);
    });
    return () => {};
  }, [data]);

  const computeLongestWord = useCallback((arr: any) => {
    if (!arr) {
      return [];
    }

    console.log("computing longest word");

    let longestWord = "";
    arr.forEach((sentence: string) => {
      sentence.split(" ").forEach((word: string) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });

    return longestWord;
  }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord
  ]);

  return (
    <>
      <div>count: {count}</div>
      <div>{show}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </>
  );
};

export default UseMemo;
