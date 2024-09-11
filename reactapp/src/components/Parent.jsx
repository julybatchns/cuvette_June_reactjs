import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");

  const receiveMessage = (childData) => {
    setMessage(childData);
  };
  return (
    <>
      <h1>Parent Component</h1>
      <p>Message from Child Component: {message}</p>
      <Child sendMessage={receiveMessage} />
    </>
  );
};

export default Parent;
