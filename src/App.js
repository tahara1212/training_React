import React, { useState } from "react";
import { InputTodos } from "./components/InputTodos"
import { InCompleteTodo } from "./components/InCompleteTodo"
import { CompleteTodo } from "./components/CompleteTodo"
import "./css/style.css"

export const App = () => {

  const [todoText, setTodoText] = useState('');
  const [inCompleteTodos, setInConmpleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const addTodo = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInConmpleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInConmpleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    const newCompTodos = [...completeTodos, inCompleteTodos[index]];
    setInConmpleteTodos(newTodos);
    setCompleteTodos(newCompTodos);
  }

  const onClickBack = (index) => {
    const newTodos = [...inCompleteTodos, completeTodos[index]];
    
    const newCompTodos = [...completeTodos];
    newCompTodos.splice(index, 1);

    setInConmpleteTodos(newTodos);
    setCompleteTodos(newCompTodos);
  }

  return (
    <>
      <InputTodos todoText={todoText} onChangeTodoText={onChangeTodoText} addTodo={addTodo} />
      <InCompleteTodo inCompleteTodos={inCompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}