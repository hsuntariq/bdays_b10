import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";

const SingleTodo = ({ item, index, removeTodo }) => {
  const [done, setDone] = useState(false);
  return (
    <>
      <div className="col-lg-3">
        <div className="card p-3 my-1 rounded-0">
          <div className="d-flex justify-content-between align-items-center">
            <h5
              className="mb-0"
              style={{
                textDecoration: `${done ? "line-through" : "none"}`,
              }}
            >
              {item}
            </h5>
            <button className="btn text-danger">
              {/* <IoMdTrash /> */}
              <input
                onChange={() => setDone(!done)}
                type="checkbox"
                name=""
                className="form-check"
                id=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
