import PropTypes from "prop-types";

export const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.description}</span>
          <button onClick={() => {}}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
