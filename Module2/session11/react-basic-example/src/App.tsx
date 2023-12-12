import React, { useState } from "react";
import "./App.css";
import LearnState from "./components/learnState";
import LearnEffect from "./components/learnEffect";
import LearnRef from "./components/learnRef";
import LearnReducer from "./components/learnReducer";
import LearnCallback from "./components/learnCallback";
import MyContext from "./contextApi/myContext";
import LearnMemo from "./components/learnMemo";

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
  const [theme, setTheme] = useState("dark");
 
  return (
    <MyContext.Provider value={theme}>
      <div className="App">
        <button
          onClick={() => {
            if (theme == "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          change
        </button>
        {/* <button onClick={() => showData()}>click</button>
      {data.map((item, index) => {
        return <Card key={index} title={item.title} desc={item.desc} />;
      })} */}

        {/* <LearnState/> */}
        {/* <LearnEffect/> */}
        {/* <LearnRef/> */}
        {/* <LearnReducer /> */}
        {/* <LearnCallback/> */}
        <LearnMemo/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
