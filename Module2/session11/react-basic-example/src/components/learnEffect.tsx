import React, { useEffect, useState } from "react";

const LearnEffect = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);
  console.log(1111);
  useEffect(() => {
    console.log("Hello");
  }, [state]); //dependencies

  return (
    <div>
      <button onClick={() => setState(state + 1)}>click</button>
      <button onClick={() => setState2(state2 + 1)}>click2</button>
    </div>
  );
};

export default LearnEffect;
