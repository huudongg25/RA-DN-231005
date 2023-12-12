import React, { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import "./header.css";
import { TodoList } from "../../App";

interface Props {
  addNewTodo: Function;
}

const Header: React.FC<Props> = (props: Props) => {
  const [content, setContent] = useState<string>("");

  const inputRef:MutableRefObject<any> = useRef();

  const handleAddTodo = (): void => {
    const newTodo: TodoList = {
      id: Math.random() * 10000000000,
      content: content,
      status: false,
    };
    props.addNewTodo(newTodo);
    setContent("")
    inputRef.current.focus()
  };

  return (
    <header className="header">
      <h3 className="title-header">Todo List</h3>
      <div className="add-todo">
        <input
          ref={inputRef}
          value={content}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          className="input-todo"
          placeholder="Enter your task"
          type="text"
        />
        <button onClick={handleAddTodo} className="button-todo">
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
