import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/counterSlice";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="center">
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  );
};

export default App;
