// import ControlledInput from "./ControlledInput";
// import FormWithValidation from "./FormWithValidation";
// import { useState } from "react";
// import EffectHook from "./EffectHook.jsx";
// import Parent from "./Parent";
// import DisplayData from "./components/DisplayData";
// import withLoading from "./components/withLoading";
// const DisplayDataWithLoading = withLoading(DisplayData);
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import ReducerHook from "./components/ReducerHook";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ThemeProvider from "./components/ThemeProvider";
// import ThemeSwitcher from "./components/ThemeSwitcher";
// import RefHook from "./components/RefHook";
import RefDOMFocus from "./components/RefDOMFocus";

function App() {
  // const [toggle, setToogle] = useState(false);

  // let message = "hello, i am functional component and data of app component.";

  return (
    <>
      {/* <h1>I am App Component</h1> */}
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
      {/* <Parent /> */}
      {/* <DisplayDataWithLoading /> */}

      {/* <Router> */}
      {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/contact/:id" element={<Contact />} />
          </Routes>
        </div> */}

      {/* </Router> */}
      {/* <ThemeProvider> */}
      {/* <ThemeSwitcher /> */}
      {/* <ReducerHook /> */}
      {/* </ThemeProvider> */}
      {/* <RefHook /> */}
      <RefDOMFocus />
    </>
  );
}

export default App;
