import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    copytodo: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
        hashTag: action.payload.tags,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo(state, action) {
      const editedTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      if (
        editedTodoIndex !== -1 &&
        action.payload.text !== "" &&
        action.payload.hashTag !== ""
      ) {
        const updatedTodo = { ...state.todos[editedTodoIndex] };

        updatedTodo.text = action.payload.text;
        updatedTodo.hashTag = action.payload.hashTag;

        const updatedTodos = [...state.todos];
        updatedTodos[editedTodoIndex] = updatedTodo;

        state.todos = updatedTodos;
      }
    },
    filterTags(state, action) {
      const filteredTodos = state.todos.filter(
        (todo) => String(todo.hashTag) === action.payload
      );
      if (action.payload.length !== 0) {
        state.copytodo = JSON.parse(JSON.stringify(state.todos));
        state.todos = JSON.parse(JSON.stringify(filteredTodos));
      } else {
        state.todos = state.copytodo;
      }
    },
  },
});

export const { addTodo, toggleComplete, removeTodo, editTodo, filterTags } =
  todoSlice.actions;

export default todoSlice.reducer;
