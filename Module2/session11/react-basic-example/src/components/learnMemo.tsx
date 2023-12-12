import React, { useMemo, useState } from "react";

const LearnMemo = () => {
  const [data,setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 21, 52, 3]);
  const [count, setCount] = useState(1);

  const result = useMemo(() => {
    return data.reduce((total, item) => total + item);
  },[data]);

  console.log(count);

  return (
    <div>
      <p> tổng tiền {result}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default LearnMemo;
