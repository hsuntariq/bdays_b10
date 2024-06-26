import React, { useRef } from "react";

const Sidebar = () => {
  const open = useRef();
  const handleOpen = () => {
    open.current.style.transform = "translateX(0)";
  };
  const handleClose = () => {
    open.current.style.transform = "translateX(-70%)";
  };
  return (
    <>
      <div
        ref={open}
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
        className="position-fixed w-25 bg-danger"
        style={{
          height: "100vh",
          top: "0",
          transition: "all 0.9s",
          transform: "translateX(-70%)",
        }}
      ></div>
    </>
  );
};

export default Sidebar;
