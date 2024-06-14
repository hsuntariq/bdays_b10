import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import toast from "react-hot-toast";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);

  const handleTodo = (e) => {
    e.preventDefault();
    if (!todo) {
      setError(true);
    } else {
      setError(false);

      setData([...data, todo]);
      toast.success("Todo added successfully!");
      setTodo("");
    }
  };

  const removeTodo = (id) => {
    // const newTodo = data.filter((item, index) => {
    //   return index != id;
    // });
    // setData(newTodo);
  };

  return (
    <>
      <div className="col-lg-5 mx-auto shadow p-5 rounded">
        <h1 className="display-3 text-center">Todo List</h1>
        <form>
          <label htmlFor="">Todo</label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Please add a todo..."
            className="form-control"
          />

          {error && (
            <p className="text-danger fw-bold m-0">Please add a todo</p>
          )}

          <button
            onClick={handleTodo}
            className="btn btn-info w-100 my-1 text-white"
          >
            Add Todo
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          {data?.map((item, index) => {
            return (
              <SingleTodo
                removeTodo={removeTodo}
                key={index}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
