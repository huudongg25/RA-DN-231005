import React, { useContext, createContext } from "react";


const MyContext = createContext("");
const ParentComponent = () => {
  const sharedValue = "Hello from Context!";

  return (
    <MyContext.Provider value={sharedValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
};
