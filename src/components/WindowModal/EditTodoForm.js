// EditTodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/todoSlice";
import Modal from "react-modal";
import style from "./EditTodoForm.module.css";

const EditTodoForm = ({ id, text, hashTag, isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(text);
  const [editedTags, setEditedTags] = useState(hashTag);

  const handleSave = () => {
    dispatch(
      editTodo({
        id: id,
        text: editedText,
        hashTag: editedTags,
      })
    );
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Todo Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "300px",
          height: "350px",
          margin: "auto",
          borderRadius: "8px",
          padding: "20px",
        },
      }}
    >
      <div className={style.modalContainer}>
        <label className={style.inputLabel}>
          Text:
          <input
            type="text"
            className={style.inputField}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </label>
        <br />

        <label className={style.inputLabel}>
          Tags:
          <input
            type="text"
            className={style.inputField}
            value={editedTags}
            onChange={(e) => setEditedTags(e.target.value)}
          />
        </label>
        <br />
        <div className={style.buttonContainer}>
          <button className={style.saveButton} onClick={handleSave}>
            Save
          </button>
          <button className={style.cancelButton} onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTodoForm;
