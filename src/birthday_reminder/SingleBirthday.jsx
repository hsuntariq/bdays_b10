import React from "react";

const SingleBirthday = ({ id, name, image, age, remove }) => {
  return (
    <>
      <div className="d-flex justify-content-between shadow p-2 my-1">
        <div className="d-flex gap-3 align-items-center">
          <img
            width={80}
            height={80}
            src={image}
            alt=""
            className="rounded-circle border border-info"
            style={{ objectFit: "contain" }}
          />
          <div className="d-flex flex-column">
            <h5> {name} </h5>
            <p className="text-info">{age} years</p>
          </div>
        </div>
        <button
          onClick={() => remove(id)}
          className="btn btn-danger align-self-center"
        >
          Remove{" "}
        </button>
      </div>
    </>
  );
};

export default SingleBirthday;
