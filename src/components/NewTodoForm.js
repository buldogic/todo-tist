import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { filterTags } from "../store/todoSlice";

const NewTodoForm = ({  value, updateText, handleAction }) => {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const [tagValue, setTagValue] = useState('');

  useEffect(() => {
    const tags = todos.map((task) => task.hashTag)
    setTagValue(tags);
  },[todos]);

  // console.log(typeof tagValue)
  // console.log('todos',todos)
  const handleTagsChange = (e) => {
    console.log('setTagValue(e.target.value)', e.target.value)
    setTagValue(e.target.value);
    
    dispatch(filterTags(e.target.value))
  };

 
 

  return (
    <div className="mb-3">
      <label className="form-label">New Todo</label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new todo"
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <div className="input-group-append">
          <select
            style={{width: '200px'}}
            className="form-select"
            value={tagValue}
            onChange={handleTagsChange}
          >
            <option value="">All</option>
            {todos.map((tag) => (
              <option key={tag.id} value={tag.hashTag}>
                {tag.hashTag}
              </option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAction}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default NewTodoForm;
