// import ControlledInput from "./ControlledInput";
// import FormWithValidation from "./FormWithValidation";

// import { useState } from "react";

// import EffectHook from "./EffectHook.jsx";
import Parent from "./Parent";

function App() {
  // const [toggle, setToogle] = useState(false);

  // let message = "hello, i am functional component and data of app component.";

  return (
    <>
      <h1>I am App Component</h1>
      {/* <ControlledInput /> */}
      {/* <FormWithValidation /> */}
      {/* <button onClick={() => setToogle(!toggle)}>
        {toggle ? "Hide Counter" : "Show Counter"}
      </button>
      {toggle ? (
        <EffectHook messageFromApp={message} number={10000} />
      ) : (
        <p>Click on the above button to see Counter App</p>
      )} */}
      <Parent />
    </>
  );
}

export default App;
