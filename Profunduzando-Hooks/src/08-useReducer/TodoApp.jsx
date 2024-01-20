import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialSate = [
  // {
  //   id: new Date().getTime(),
  //   description: "recolectar la piedra del Alma",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialSate, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  return (
    <>
      <h1>
        Todo List: 10, <small>Pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="container-list">
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
      <div>
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
