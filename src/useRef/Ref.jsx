import React, { useRef } from "react";

const Ref = () => {
  const color = useRef();

  let rotation = 360;
  const changeColor = () => {
    color.current.style.color = "red";
    color.current.style.transition = "all 0.9s";

    color.current.style.transform = `rotate(${rotation}deg)`;
    rotation += 360;
  };

  return (
    <>
      <div className="container text-center">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgjIzCCCBpUJxk17x7hdD3JVDBNfg0P01qQ&s"
          alt=""
          ref={color}
        />
        <br />
        <button onClick={changeColor} className="btn btn-warning">
          Change Color
        </button>
      </div>
    </>
  );
};

export default Ref;
