import React, { useState } from "react";
import toast from "react-hot-toast";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const consoleClick = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      toast.error("Please enter a name");
    } else {
      toast.success("Name added successfully");
      setError(false);
      console.log(name);
      setName("");
    }

    setTimeout(() => {
      setError(false);
    }, 4000);
  };

  return (
    <>
      <div className="container p-5 shadow col-lg-6">
        <form>
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name..."
            className="form-control"
          />
          {error && (
            <p className="text-danger fw-bolder my-0">please enter the name</p>
          )}
          <button onClick={consoleClick} className="btn btn-dark my-2 w-100">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default ControlledInputs;
