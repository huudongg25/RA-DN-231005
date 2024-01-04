import React, { useState } from "react";
import "./App.css";
import LearnState from "./components/learnState";
import LearnEffect from "./components/learnEffect";
import LearnRef from "./components/learnRef";
import LearnReducer from "./components/learnReducer";
import LearnCallback from "./components/learnCallback";
import MyContext from "./contextApi/myContext";
import LearnMemo from "./components/learnMemo";
import Child1 from "./components/child1";
import Child2 from "./components/child2";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      {count}
      <Child1 count={count} />
      <Child2 />
    </div>
  );
}

export default App;
