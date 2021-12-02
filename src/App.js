import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import { useState, useEffect } from 'react';

function App() {
  //TODOLIST
  //TODO
  const [todoListArray, setTodoListArray] = useState([])
  const [inputValue, setinputValue] = useState("")
  const makeTodoYes = (todo) => {
    setTodoListArray(todoListArray.map(el => {
      if (el === todo) {
        el.result = true
      } 
      return el
    }))
  }

  const makeTodoNo = (todo) => {
    setTodoListArray(todoListArray.map(el => {
      if (el === todo) {
        el.result = false
      } 
      return el
    }))
  }

  const deleteTodo = (todo) => {
    setTodoListArray(todoListArray.filter(el => el !== todo))
  }
  useEffect(() => {
   console.log(todoListArray)
  }, [todoListArray])

  return (
    <>
    <input className={""} onChange={(e)=> {
      setinputValue(e.target.value)
      }} value={inputValue}></input>
    <button onClick ={() => {
      setTodoListArray([...todoListArray,{value: inputValue, result: ""}]) 
      setinputValue('')
    }}>ADD TODO</button>
    <TodoList leshaTodoList={todoListArray} forTest ="newPropforProps" makeTodoYes={makeTodoYes}
     makeTodoNo={makeTodoNo}  deleteTodo={deleteTodo}>
    I am inside the tag
    </TodoList>
    </>
  );
}

export default App;
