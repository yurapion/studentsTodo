import React from 'react'
import { useState, useEffect } from 'react';
import Todo from "./Todo"

const TodoList = (props) =>  {
   useEffect(() => {
    console.log("I AM INSIDE TODOLIST TAG", props.leshaTodoList)
   }, [props.leshaTodoList])
        return (
            <>
            <div>
                I am todo list {props.children} {props.forTest}
            </div>
            <div>
                {props.leshaTodoList.map(todo => <Todo todo={todo} makeTodoYes={props.makeTodoYes} text={todo.value} 
                makeTodoNo={props.makeTodoNo} deleteTodo={props.deleteTodo}/>)}
            </div>
            </>

          
        )
    
}

export default TodoList



