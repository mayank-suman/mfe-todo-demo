import React, { useState } from "react";
import { filteredItems, sort } from "./utils";
import { TodoAddFormProps } from "./TodoAddForm";
import ItemsFilter from "./itemsFilter";

export type FilterValues = "0" | "1" | "2";

export const TodoList = ({ items, dispatch }: TodoAddFormProps) => {
  const [currentSelection, setCurrentSelection] = useState<FilterValues>("0");

  const renderListItems = () => {
    const itemsSorted = sort(items);
    return itemsSorted
      .filter(filteredItems(currentSelection))
      .map(({ id, isComplete, text }) => {
        return (
          <li key={id} className={(isComplete ? "" : "in") + "complete"}>
            <input
              type="checkbox"
              checked={isComplete}
              onChange={() =>
                dispatch({ type: "COMPLETE", id: id, value: !isComplete })
              }
            ></input>
            {isComplete ? (
              <span>
                <s>{text}</s>
              </span>
            ) : (
              <span>{text}</span>
            )}
          </li>
        );
      });
  };

  return (
    <div className="listWrapper">
      {items.length > 0 && (
        <ItemsFilter
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
        />
      )}
      <ul className="TodoList">{renderListItems()}</ul>
    </div>
  );
};
