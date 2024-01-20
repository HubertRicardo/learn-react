import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <>
      <li>
        <span>{todo.description}</span>
        <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func,
};
