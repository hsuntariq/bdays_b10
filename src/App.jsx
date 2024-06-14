import React from "react";
import Birthday from "./birthday_reminder/Birthday";
import UseEffectBasics from "./useEffect/UseEffectBasics";
import CleanUpFunction from "./useEffect/CleanUpFunction";
import FrontPage from "./Apis/FrontPage";
import ControlledInputs from "./inputs/ControlledInputs";
import { Toaster } from "react-hot-toast";
import Todo from "./todoList/Todo";
const App = () => {
  return (
    <>
      {/* <Birthday /> */}
      {/* <UseEffectBasics /> */}
      {/* <CleanUpFunction /> */}
      {/* <FrontPage /> */}
      {/* <ControlledInputs /> */}
      <Todo />
      <Toaster />
    </>
  );
};

export default App;
