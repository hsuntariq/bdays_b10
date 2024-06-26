import React, { useState } from "react";
import SingleTodo from "./SingleTodo";

const ComplexTodo = () => {
  const [data, setData] = useState([]);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    age: "",
  });

  //   destructure to access directly
  const { name, email, phone, dob, age } = formFields;

  //   handle the change

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.name + ":" + e.target.value);
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setData([...data, formFields]);

    setFormFields({ name: "", email: "", phone: "", dob: "", age: "" });
  };

  return (
    <>
      <div className="container col-lg-5 mx-auto shadow p-5">
        <form>
          <h1 className="text-center display-5">Complex todo</h1>
          <label htmlFor="">Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={name}
            type="text"
            className="form-control"
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            onChange={handleChange}
            value={email}
            type="email"
            className="form-control"
          />
          <label htmlFor="">Phone</label>
          <input
            name="phone"
            onChange={handleChange}
            value={phone}
            type="text"
            className="form-control"
          />
          <label htmlFor="">DOB</label>
          <input
            name="dob"
            onChange={handleChange}
            value={dob}
            type="date"
            className="form-control"
          />
          <label htmlFor="">Age</label>
          <input
            name="age"
            onChange={handleChange}
            value={age}
            type="number"
            className="form-control"
          />
          <button onClick={handleClick} className="btn btn-success my-3 w-100">
            Add Data
          </button>
        </form>
      </div>

      <div className="container p-5 my-5 shadow">
        <div className="row">
          {data?.map((item, index) => {
            return <SingleTodo key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ComplexTodo;
