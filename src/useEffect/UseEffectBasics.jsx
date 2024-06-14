import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("component rerendered");
    if (count == 0) {
      document.title = "Vite + React";
    } else {
      document.title = `(${count}) new messages`;
    }
  }, []);

  return (
    <>
      <>
        <h1 className="display-1 text-center">{count}</h1>
        <button
          onClick={handleClick}
          className="btn btn-info mx-auto d-block text-white fw-bold"
        >
          Count+
        </button>
      </>
    </>
  );
};

export default UseEffectBasics;
