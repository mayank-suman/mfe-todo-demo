import React, { useEffect, useReducer } from "react";
import "./index.css";

import TodoAddForm from "./TodoAddForm";
import { reducer } from "./utils";
import { TodoList } from "./TodoList";

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export type TodoAction =
  | { type: "ADD"; value: string }
  | { type: "DELETE" }
  | { type: "COMPLETE"; value: boolean; id: number };

const Todo = () => {
  const isLocalStorageWorking = !!window?.localStorage;
  const [items, dispatch] = useReducer(
    reducer,
    JSON.parse((window as any).localStorage.getItem("todos")) || []
  );

  // Setting todo to localStorage
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(items));

    return () => {
      window.localStorage.clear();
    };
  }, [items]);

  return (
    <>
      {isLocalStorageWorking ? (
        <div className="App">
          <TodoAddForm items={items} dispatch={dispatch} />
          <TodoList items={items} dispatch={dispatch} />
        </div>
      ) : (
        <p>Please enable javascript or check the browser settings.</p>
      )}
    </>
  );
};

export default Todo;
