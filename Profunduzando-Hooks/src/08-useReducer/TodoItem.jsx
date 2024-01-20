import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li>
        <span
          className={`${todo.done ? "text-decoration-line-through" : ""}`}
          onDoubleClick={() => {
            onToggleTodo(todo.id);
          }}
        >
          {todo.description}
        </span>
        <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
};
