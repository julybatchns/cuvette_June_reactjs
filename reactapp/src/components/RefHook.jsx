import { useState, useEffect, useRef } from "react";

const RefHook = () => {
  const [stateCounter, setStateCounter] = useState(0);

  const refCounter = useRef(0);

  useEffect(() => {
    console.log("I have been called");
  }, [stateCounter]);

  const incrementStateCounter = () => {
    setStateCounter(stateCounter + 1);
  };

  const incrementRefCounter = () => {
    refCounter.current += 1;
    console.log("Ref Counter value:", refCounter.current);
  };

  return (
    <>
      {/* Display useState Value */}
      <h2>State Counter:- {stateCounter}</h2>

      {/* Display useRef Value, (no-render of UI) */}
      <h2>Ref Counter:- {refCounter.current}</h2>
      <button onClick={incrementStateCounter}>
        Increment State (useState)
      </button>
      <button onClick={incrementRefCounter}>Increment Ref (useRef)</button>
    </>
  );
};

export default RefHook;
