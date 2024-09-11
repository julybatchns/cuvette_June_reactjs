import { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter an Input"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Input Value: {inputValue} </p>
    </>
  );
}

export default ControlledInput;
