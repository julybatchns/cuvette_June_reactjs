/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const EffectHook = ({ messageFromApp, number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("EffectHook Component Mounted in UI Screen");

    return () => {
      console.log("EffectHook Component UnMounted in UI Screen");
    };
  }, []);

  useEffect(() => {
    console.log("EffectHook Component Updated in UI Screen");
  }, [count]);

  return (
    <>
      <h2>{messageFromApp}</h2>
      <h2>{number}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default EffectHook;
