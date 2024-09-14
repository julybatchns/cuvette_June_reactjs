import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./redux/actions";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Counter App using Redux</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
