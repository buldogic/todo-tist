import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const extractedTags = text.match(/#(.+)/g);
    setTags(extractedTags ? extractedTags.map((tag) => tag.slice(0)) : []);
  }, [text]);

  const handleAction = () => {
    if (text.trim().length) {
      const newTask = {
        text: text,
        tags: tags,
      };
      dispatch(addTodo({ ...newTask }));
      setText('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4">Todo</h1>
          <NewTodoForm value={text} updateText={setText} handleAction={handleAction} todos={todos} />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
