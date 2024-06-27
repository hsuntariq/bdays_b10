import React, { createContext, useContext } from "react";
import { useState } from "react";
import { bdays } from "../birthday_reminder/bdays";
import { AppContext } from "../context/context";
import audio from "../../public/audio.mp3";
const PersonContext = createContext();

const Drilling = () => {
  const test = useContext(AppContext);
  console.log(test);
  const [data, setData] = useState(bdays);
  const remove = (id) => {
    const newData = data.filter((item, index) => {
      return item.id !== id;
    });

    const a = new Audio(audio);
    a.play();
    setData(newData);
  };
  return (
    <PersonContext.Provider
      value={{
        remove,
        data,
      }}
    >
      <div className="container">
        <List />;
      </div>
    </PersonContext.Provider>
  );
};

const List = ({ id, name }) => {
  return (
    <>
      <SinglePerson name={name} id={id} />
    </>
  );
};

const SinglePerson = () => {
  const { data, remove } = useContext(PersonContext);
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div className="card text-center p-3 my-2 w-25 mx-auto">
              <h5>{item?.name}</h5>
              <button
                onClick={() => remove(item?.id)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Drilling;
