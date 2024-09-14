import { useRef } from "react";

const RefDOMFocus = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    console.log(inputRef);
    console.log(inputRef.current);
  };

  return (
    <>
      <h2>Click the button to focus the input field</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="click button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default RefDOMFocus;
