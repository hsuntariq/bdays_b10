import React, { useState } from "react";
import toast from "react-hot-toast";
import Values from "values.js";
import SingleColor from "./SingleColor";
const Colors = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colors, setColors] = useState([]);
  const handleColor = (e) => {
    e.preventDefault();
    // exception handling
    try {
      setError(false);
      const myColor = new Values(color).all(10);
      setColors(myColor);
    } catch (error) {
      setError(true);
      toast.error("Invalid Color value");
    }
  };

  return (
    <>
      <div className="container col-lg-5 mx-auto shadow-lg p-5">
        <form>
          <h1 className="text-center display-4">Color Generator</h1>
          <input
            style={{
              border: `${error ? "1px solid red" : ""}`,
            }}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder="e.g Brown"
            className="form-control"
          />
          <button onClick={handleColor} className="btn btn-dark my-2 w-100">
            Generate color
          </button>
        </form>
      </div>

      <div className="container my-4">
        <div className="row">
          {colors?.map((item, index) => {
            return (
              <SingleColor key={index} index={index} {...item} hex={item.hex} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Colors;
