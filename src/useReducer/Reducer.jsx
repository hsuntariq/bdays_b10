import React, { useReducer, useState } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    if (action.type == "EMPTY") {
      return {
        ...state,
        error: true,
        message: "Please enter data",
      };
    }

    if (action.type == "RESET") {
      return {
        ...state,
        error: false,
        success: false,
        message: "",
      };
    }

    if (action.type == "ADD_TODO") {
      return {
        ...state,
        success: true,
        message: "Todo added",
        todos: [...state.todos, action.payload],
      };
    }
  };

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
      dispatch({ type: "ADD_TODO", payload: name });
    }

    setTimeout(() => {
      dispatch({ type: "RESET" });
    }, 3000);
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
    </>
  );
};

export default Reducer;
