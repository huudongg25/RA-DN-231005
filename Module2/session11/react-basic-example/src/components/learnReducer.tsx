import React, { useContext, useReducer } from "react";
import MyContext from "../contextApi/myContext";

//function update
const counterReducer = (state: any, action: { type: number }) => {
  switch (action.type) {
    case 1:
      return state + 1;
    case 2:
      return state - 1;
    default:
      return state;
  }
};

const LearnReducer = () => {
  const theme = useContext(MyContext);
  //    biến lưu trữ , hàm set lại   hàm cập nhật, giá trị khởi tạo
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div
      style={
        theme == "dark"
          ? {
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
              color: "white",
            }
          : {
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              color: "black",
            }
      }
    >
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 2 })}>Decrement</button>
    </div>
  );
};

export default LearnReducer;
