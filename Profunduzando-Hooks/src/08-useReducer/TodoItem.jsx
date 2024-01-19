import PropTypes from "prop-types";

export const TodoItem = ({ todo }) => {
  return (
    <>
      <li>
        <span>{todo.description}</span>
        <button onClick={() => {}}>Borrar</button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
