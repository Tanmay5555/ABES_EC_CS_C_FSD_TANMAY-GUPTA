import React, { useState } from 'react'
import InputToDo from './component/InputTodolist.jsx'

const App = () => {
  const [todoList, setTodoList] = useState([]);
  
  const inputHandler = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="todo_list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) => (
        <li key={index}>
          {data}
        </li>
      ))}
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}

export default App