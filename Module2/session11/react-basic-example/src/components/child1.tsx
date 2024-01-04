import React, { memo } from "react";

interface Props {
  count: number;
}

const Child1 = (props: Props) => {
  console.log("child1");
  return <div>Child1</div>;
};

export default memo(Child1);
