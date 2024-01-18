import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit} className="flex justify-center">
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange}
        className="w-72 h-10 border border-blue-800 p-2 mt-1 rounded-lg text-xl font-semibold"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
