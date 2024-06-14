import React, { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use effect ran");
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <>
      <h1 className="display-1 text-center">Size:{size}px</h1>
    </>
  );
};

export default CleanUpFunction;
