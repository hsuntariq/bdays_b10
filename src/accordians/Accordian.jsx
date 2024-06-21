import React from "react";
import { data } from "./data";
import SingleFAQ from "./SingleFAQ";

const Accordian = () => {
  return (
    <>
      <div className="container col-lg-5 shadow-lg mx-auto p-5">
        <h1 className="display-4 text-center">Accordian</h1>
        {data.map((item, index) => {
          return <SingleFAQ {...item} />;
        })}
      </div>
    </>
  );
};

export default Accordian;
