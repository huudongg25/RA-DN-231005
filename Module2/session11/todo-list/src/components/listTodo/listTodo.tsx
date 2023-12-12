import React, { useState } from "react";
import "./listTodo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoList } from "../../App";

interface Props {
  todo: TodoList[];
  deleteTodo: Function;
  deleteAllTodo: Function;
  updateTodo:Function
}

const ListTodo: React.FC<Props> = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editData, setEditData] = useState<string>("");
  const [idEdit,setIdEdit] = useState<number | null>(null)


    const handleUpdateTodo = ()=>{
        const updateData = {
            id:idEdit,
            content:editData,
            status:false
        }
        props.updateTodo(updateData,idEdit)
        setOpenModal(false)
    }

  return (
    <section className="wrapper-list-todo">
      {openModal ? (
        <div className="modal">
          <div className="modal-contet">
            <span onClick={() => setOpenModal(false)} className="exit">
              X
            </span>
            <div>
              <input
                value={editData}
                onChange={(e) => setEditData(e.target.value)}
                className="input-todo"
                type="text"
              />
              <button onClick={handleUpdateTodo} className="button-todo">Save</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="content">
        <ul className="list">
          {props.todo.map((item, index) => {
            return (
              <li key={item.id} className="todo">
                <p className="todo-content">{item.content}</p>
                <div className="actions">
                  <FaRegTrashAlt onClick={() => props.deleteTodo(item.id)} />
                  <FaEdit
                    onClick={() => {
                      setOpenModal(true);
                      setEditData(item.content);
                      setIdEdit(item.id)
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => props.deleteAllTodo()} className="delete">
        Delete All
      </button>
    </section>
  );
};

export default ListTodo;
