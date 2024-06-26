import { Reducer } from "react";
import { Todo, TodoAction } from ".";
import { FilterValues } from "./TodoList";

export const reducer: Reducer<Todo[], TodoAction> = (state, action) => {
  if (action.type === "ADD") {
    return [...state, getNewTodo(action.value)];
  }

  if (action.type === "COMPLETE") {
    return state.map((item) => {
      if (item.id === action.id) {
        return { ...item, isComplete: action.value };
      }
      return item;
    });
  }
  throw Error("Unknown action.");
};

export const getNewTodo: (text: string) => Todo = (text) => {
  return {
    id: Date.now(),
    text: text,
    isComplete: false,
  };
};

export function sort(items: Todo[]) {
  return items.sort(function (a, b) {
    if (a.isComplete && !b.isComplete) {
      return 1;
    } else if (!a.isComplete && b.isComplete) {
      return -1;
    } else {
      if (a.id > b.id) {
        return -1;
      } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

export function filteredItems(currentSelection: FilterValues) {
  return (item: Todo) => {
    if (currentSelection === "1") {
      return item.isComplete === false;
    } else if (currentSelection === "2") {
      return item.isComplete === true;
    } else {
      return item;
    }
  };
}
