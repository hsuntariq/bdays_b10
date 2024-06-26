import React from "react";

const SingleTodo = ({ name, email, age, dob }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card my-2 p-5">
          <h5>Name:{name}</h5>
          <h5>Name:{email}</h5>
          <h5>Name:{age}</h5>
          <h5>Name:{dob}</h5>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
