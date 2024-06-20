import React from "react";
import Birthday from "./birthday_reminder/Birthday";
import UseEffectBasics from "./useEffect/UseEffectBasics";
import CleanUpFunction from "./useEffect/CleanUpFunction";
import FrontPage from "./Apis/FrontPage";
import ControlledInputs from "./inputs/ControlledInputs";
import { Toaster } from "react-hot-toast";
import Todo from "./todoList/Todo";
import Generator from "./loremGenerator/Generator";
import { CircleLoader } from "react-spinners";
import Colors from "./colorGenerator/Colors";
const App = () => {
  return (
    <>
      {/* <Birthday /> */}
      {/* <UseEffectBasics /> */}
      {/* <CleanUpFunction /> */}
      {/* <FrontPage /> */}
      {/* <ControlledInputs /> */}
      {/* <Todo /> */}
      {/* <Generator /> */}
      <Colors />
      <Toaster />
    </>
  );
};

export default App;
