import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const SingleTodo = ({ id, name, remove }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="card p-4 my-1">
          <div className="d-flex align-items-center justify-content-between">
            <h6>{name}</h6>
            <FaRegTrashAlt
              onClick={() => remove(id)}
              size={25}
              color="red"
              cursor="pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
