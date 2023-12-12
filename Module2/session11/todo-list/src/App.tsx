import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import ListTodo from "./components/listTodo/listTodo";

export interface TodoList {
  id: number;
  content: string;
  status: boolean;
}

function App() {
  const [todo, setTodo] = useState<TodoList[]>([]);

  const addNewTodo = (todo: TodoList): void => {
    setTodo((prev: TodoList[]) => [...prev, todo]);
  };

  const deleteTodo = (id: number): void => {
    const newTodo = todo.filter((item) => item.id != id);
    setTodo(newTodo);
  };

  const deleteAllTodo = () => {
    setTodo([]);
  };

  const updateTodo = (newTodo: TodoList, id: number):void => {
    const newData:TodoList[] = todo.map((item) => {
      if (item.id == id) {
        return newTodo;
      }
      return item;
    });
    setTodo(newData);
  };
  return (
    <div className="App">
      <Header addNewTodo={addNewTodo} />
      <ListTodo
        todo={todo}
        deleteTodo={deleteTodo}
        deleteAllTodo={deleteAllTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
