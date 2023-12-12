import React, { useCallback, useState } from "react";

const LearnCallback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
 
  const handleClick = useCallback(() => {
    setCount(count + 1);
  },[count])
  
  const handleClick2 =() => {
    setCount2(count2 + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick2}>Increment</button>
    </div>
  );
};

export default LearnCallback;
