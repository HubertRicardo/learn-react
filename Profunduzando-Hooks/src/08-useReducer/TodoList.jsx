import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func,
};
