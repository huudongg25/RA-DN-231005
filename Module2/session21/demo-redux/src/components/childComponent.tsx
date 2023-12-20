import React from "react";
import { useDispatch } from "react-redux";

const ChildComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle</button>
      <button onClick={() => dispatch({ type: "UP" })}>+</button>
      <button onClick={() => dispatch({ type: "DOWN" })}>-</button>
    </div>
  );
};

export default ChildComponent;
