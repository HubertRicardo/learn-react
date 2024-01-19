import { useForm } from "../hooks";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onResetForm, onInputChange } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer? "
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.any.isRequired,
};
