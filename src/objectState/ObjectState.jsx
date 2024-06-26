import React, { useState } from "react";

const ObjectState = () => {
  const [user, setUser] = useState({
    name: "Ali",
    email: "ali@mail.com",
    age: 21,
    cls: 10,
  });

  //   destructure
  const { name, email, age, cls } = user;

  const changeName = () => {
    setUser({ ...user, name: "Akmal", email: "Akmal@mail.com" });
  };

  return (
    <>
      <div className="conainer text-center">
        <h4>Name:{name}</h4>
        <h4>Email:{email}</h4>
        <h4>Age:{age}</h4>
        <h4>class:{cls}</h4>
        <button onClick={changeName} className="btn btn-dark my-2">
          change name
        </button>
      </div>
    </>
  );
};

export default ObjectState;
