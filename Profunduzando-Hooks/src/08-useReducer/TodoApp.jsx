import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialSate = [
  {
    id: new Date().getTime(),
    description: "recolectar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "recolectar la piedra del Tiempo",
    done: false,
  },
];

const handleNewTodo = (todo) => {
  console.log(todo);
};

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialSate);
  console.log(dispatchTodo);
  return (
    <>
      <h1>
        Todo List: 10, <small>Pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="container-list">
        <TodoList todos={todos} />
      </div>
      <div>
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
