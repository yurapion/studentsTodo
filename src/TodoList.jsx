import React from 'react'
import { useState, useEffect } from 'react';
import Todo from "./Todo"

const TodoList = (props) =>  {
    console.log(props)

        return (
            <>
            <div>
                {props.leshaTodoList.map(todo => <Todo todo={todo} makeTodoYes={props.makeTodoYes} text={todo.value}
                makeTodoNo={props.makeTodoNo} deleteTodo={props.deleteTodo}/>)}
            </div>
            </>

          
        )
    
}

export default TodoList



