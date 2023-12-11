import React, { MutableRefObject, useEffect, useRef } from "react";

const LearnRef = () => {
  const inputRef: any = useRef();
  const idRef: MutableRefObject<number | null> = useRef(null); //GIúp mình keep lại giá trị khi mà component re-render

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current.getAttribute("data-content"));
  }, []);

  return (
    <div>
      <input type="text" data-content="ok" ref={inputRef} />
    </div>
  );
};

export default LearnRef;
