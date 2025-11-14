//add del button after add task in inputtodolist
//add  update button in todolist
import React, { useState } from 'react'

const InputTodolist = ({ inputHandler }) => {
  const [inputData, setInputData] = useState("");       
    const [items, setItems] = useState([]);

    const changeHandler = (e) => {
        setInputData(e.target.value);
    }
    const addItem = () => {
        if(inputData.trim() !== "") {
            inputHandler(inputData);    
            setItems([...items, inputData]);
            setInputData("");
        }
    }
    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    }   
    return (
    <div>
        <input type="text" value={inputData} onChange={changeHandler} />
        <button onClick={addItem}>Add Task</button>
        <ul>    
            {items.map((item, index) => (
                <li key={index}>
                    {item}      
                    <button onClick={() => deleteItem(index)}>Delete</button>
                </li>
            ))}    
        </ul>
    </div>
  )
}

export default InputTodolist

