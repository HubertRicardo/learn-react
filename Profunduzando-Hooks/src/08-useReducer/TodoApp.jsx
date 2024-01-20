import "./todoReducer";
import { TodoList, TodoAdd } from "./index";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const { handleDeleteTodo, handleToggleTodo, handleNewTodo, todos } =
    useTodo();

  return (
    <>
      <h1>
        Todo List: 10, <small>Pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="container-list">
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
      </div>
      <div>
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
