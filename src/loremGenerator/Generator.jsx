import React, { useEffect, useState } from "react";
import { data } from "./data";

const Generator = () => {
  const [number, setNumber] = useState(null);
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (number > data.length) {
      setError(true);
    } else {
      setError(false);
      const newData = data.slice(0, number);
      setMyData(newData);
    }
  };

  useEffect(() => {
    if (number > data.length) {
      setError(true);
    } else {
      setError(false);
      const newData = data.slice(0, number);
      setMyData(newData);
    }
  }, [number]);

  return (
    <>
      <div className="container col-lg-5 mx-auto shadow p-4">
        <h1 className="display-6 text-center">Lorem Generator</h1>
        <form>
          <label htmlFor="">Enter a number</label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="e.g. 4"
            className="form-control"
          />
          {error && (
            <p className="text-danger fw-bold m-0">
              please enter number between 0 and {data.length}
            </p>
          )}
          <button
            onClick={handleGenerate}
            className="btn btn-success my-2 w-100 "
          >
            Generate
          </button>
        </form>
      </div>
      <div className="container">
        {myData?.map((item, index) => {
          return <p className="text-secondary text-center">{item}</p>;
        })}
      </div>
    </>
  );
};

export default Generator;
