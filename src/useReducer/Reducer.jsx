import React, { useReducer, useState } from "react";
import { reducer } from "./reducer";
import SingleTodo from "./SingleTodo";

const Reducer = () => {
  const [name, setName] = useState("");

  const initialState = {
    todos: [],
    error: false,
    success: false,
    message: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTodo = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "EMPTY" });
    } else {
      dispatch({ type: "ADD_TODO", payload: { name, id: Date.now() } });
    }

    setTimeout(() => {
      dispatch({ type: "RESET" });
    }, 3000);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <>
      <div className="col-lg-5 mx-auto shadow p-5 rounded">
        <h1 className="display-3 text-center">Todo List</h1>
        <form>
          <label htmlFor="">Todo</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Please add a todo..."
            className="form-control"
          />
          {state.error && (
            <p className="text-danger fw-bold">{state.message}</p>
          )}
          {state.success && (
            <p className="text-success fw-bold">{state.message}</p>
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
          {state?.todos?.map((item, index) => {
            return <SingleTodo remove={handleDelete} key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Reducer;
