import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todoSlice";
import EditTodoForm from "./WindowModal/EditTodoForm";

const TodoItem = ({ id, text, hashTag, completed }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  return (
    <div className="col-md-4 mb-3">
      <div
        className={`card ${
          completed ? "bg-success" : "bg-warning"
        } text-center`}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ whiteSpace: "pre-line" }}>
            {text}
          </h5>
          {hashTag.length !== 0 ? (
            <div className="card-subtitle mb-2 text-muted">{hashTag}</div>
          ) : (
            <div className="card-subtitle mb-2 text-muted">#</div>
          )}
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn btn-danger"
              style={{ width: "80px" }}
              onClick={() => dispatch(removeTodo({ id }))}
            >
              Delete
            </button>
            <button
              className="btn btn-primary"
              style={{ width: "80px" }}
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <EditTodoForm
              id={id}
              text={text}
              hashTag={hashTag}
              isOpen={editing}
              onRequestClose={() => setEditing(false)}
            />
            <button
              className={`btn btn-primary ${
                completed ? "btn-light" : "btn-dark"
              }`}
              style={{ width: "80px" }}
              onClick={() => dispatch(toggleComplete({ id }))}
            >
              {completed ? "Ok" : "Work"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
