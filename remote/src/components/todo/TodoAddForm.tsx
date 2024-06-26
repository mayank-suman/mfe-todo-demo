import React, {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  useState,
} from "react";

import { Todo, TodoAction } from ".";

export interface TodoAddFormProps {
  items: Todo[];
  dispatch: Dispatch<TodoAction>;
}

const TodoAddForm = ({ items, dispatch }: TodoAddFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target?.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    dispatch({ type: "ADD", value: inputValue });
    setInputValue("");
  };

  return (
    <form className="TodoAddForm" onSubmit={onSubmit}>
      <div className="inputRow">
        <input
          type="text"
          name="todo"
          id="todo"
          value={inputValue}
          onChange={onInputChange}
          placeholder="New todo"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoAddForm;
