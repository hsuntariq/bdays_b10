import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { FiMinusSquare } from "react-icons/fi";

const SingleFAQ = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{ transition: "all 0.9s" }}
        className="card p-4 border-0 shadow my-2"
      >
        <div
          style={{ transition: "all 0.9s" }}
          className="d-flex align-items-center justify-content-between"
        >
          <h5>{question}</h5>
          {open ? (
            <>
              <FiMinusSquare
                onClick={() => setOpen(false)}
                size={25}
                cursor="pointer"
              />
            </>
          ) : (
            <>
              <BsPlusSquare
                onClick={() => setOpen(true)}
                size={25}
                cursor="pointer"
              />
            </>
          )}
        </div>
        <div
          className="answer"
          style={{
            height: `${open ? "70px" : "0"}`,
            overflow: "hidden",
            transition: "all 0.5s",
          }}
        >
          <p style={{ transition: "all 0.9s" }} className="text-secondary">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleFAQ;
