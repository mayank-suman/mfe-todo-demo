import React from "react";
import { FilterValues } from "./TodoList";

interface Props {
  currentSelection: FilterValues;
  setCurrentSelection: React.Dispatch<React.SetStateAction<FilterValues>>;
}

function ItemsFilter({ currentSelection, setCurrentSelection }: Props) {
  const onSelectionChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setCurrentSelection(event.target.value as FilterValues);
  };

  return (
    <select value={currentSelection} onChange={onSelectionChange}>
      <option value="0">All</option>
      <option value="1">Active</option>
      <option value="2">Completed</option>
    </select>
  );
}

export default ItemsFilter;
