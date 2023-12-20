import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ChildComponent from "./components/childComponent";
import ChildComponent2 from "./components/childComponent2";

function App() {
  const count = useSelector((state: any) => state.count);
  return (
    <div className="App">
      Đây là count : {count}
      <ChildComponent2/>
      <ChildComponent/>
    </div>
  );
}

export default App;
