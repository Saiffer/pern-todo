import React, { Fragment } from "react";
import "./App.css";

import ListTodos from "./components/ListTodos";
import InputTodo from "./components/InputTodo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <>
      <div className='container'>
        <InputTodo />
      </div>

      <ListTodos />
    </>
  );
}

export default App;
