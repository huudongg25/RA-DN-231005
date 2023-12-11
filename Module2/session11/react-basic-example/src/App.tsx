import React from "react";
import "./App.css";
import LearnState from "./components/learnState";
import LearnEffect from "./components/learnEffect";
import LearnRef from "./components/learnRef";

function App() {
  const data = [
    {
      title: "bài 1",
      desc: "học bài 1",
    },
    {
      title: "bài 2",
      desc: "học bài 2",
    },
    {
      title: "bài 3",
      desc: "học bài 3",
    },
    {
      title: "bài 4",
      desc: "học bài 4",
    },
  ];

  const showData = (): any => {
    console.log(data);
  };

  return (
    <div className="App">
      {/* <button onClick={() => showData()}>click</button>
      {data.map((item, index) => {
        return <Card key={index} title={item.title} desc={item.desc} />;
      })} */}

      {/* <LearnState/> */}
      {/* <LearnEffect/> */}
      <LearnRef/>
    </div>
  );
}

export default App;
