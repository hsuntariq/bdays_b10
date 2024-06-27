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
import Accordian from "./accordians/Accordian";
import Main from "./ProductAPI/Main";
import ObjectState from "./objectState/ObjectState";
import ComplexTodo from "./objectState/ComplexTodo";
import Ref from "./useRef/Ref";
import Sidebar from "./useRef/sidebar/Sidebar";
import Reducer from "./useReducer/Reducer";
import Drilling from "./propDrilling/Drilling";
import AudioComponent from "./audio/Audio";
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
      {/* <Colors /> */}
      {/* <Accordian /> */}
      {/* <Main /> */}
      {/* <ObjectState /> */}
      {/* <ComplexTodo /> */}
      {/* <Ref /> */}
      {/* <Sidebar /> */}
      {/* <Reducer /> */}
      {/* <Drilling /> */}
      <AudioComponent />
      <Toaster />
    </>
  );
};

export default App;
