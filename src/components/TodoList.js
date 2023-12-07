import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="container mt-4">
      <div className="row">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
