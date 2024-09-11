/* eslint-disable react/prop-types */
import { useState } from "react";

const Child = ({ sendMessage }) => {
  const [childMessage, setChildMessage] = useState("");

  // const handleMessage = (childMessage) => {
  //   sendMessage(childMessage);
  // };

  return (
    <>
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="Enter a message"
        value={childMessage}
        onChange={(e) => setChildMessage(e.target.value)}
      />
      <button onClick={() => sendMessage(childMessage)}>
        Send Data to Parent
      </button>
    </>
  );
};

export default Child;
