import React, { useState } from 'react';

const InputTodolist = ({ inputHandler }) => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setInputData(e.target.value);
  };

  const addItem = () => {
    if (inputData.trim() !== "") {
      if (isEditing) {
        const updatedItems = [...items];
        updatedItems[editIndex] = inputData;
        setItems(updatedItems);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        inputHandler(inputData);
        setItems([...items, inputData]);
      }
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setInputData("");
    }
  };

  const updateItem = (index) => {
    setInputData(items[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div>
      <input type="text" value={inputData} onChange={changeHandler} />
      <button onClick={addItem}>{isEditing ? "Update Task" : "Add Task"}</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => updateItem(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputTodolist;

