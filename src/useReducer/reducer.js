export const reducer = (state, action) => {
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

  if (action.type == "DELETE_TODO") {
    return {
      ...state,
      success: true,
      message: "Todo deleted Successfully",
      todos: state.todos.filter((item, index) => {
        return item.id !== action.payload;
      }),
    };
  }
};
