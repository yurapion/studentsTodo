import React from 'react'
import './App.css';

export default function Todo(props) {
    return (
        <div style={{ width: "400px", border: "1px solid black", margin: "10px 0"}} 
        // className={props.todo.result ? "todoYes" : "todoNo"
        className={props.todo.result !== "" ? props.todo.result ? "todoYes" : "todoNo" : ""}>
            <p style={{
                display: "inline-block",        
                paddingRight: "50px",
                width: "100px",
                paddingLeft: "30px"
            }
            }>{props.text}</p>
            <button onClick={() => {
                props.makeTodoYes(props.todo)
            }}>YES</button>
            <button style={{marginInline: "10px"}}
            onClick={() => {
                props.makeTodoNo(props.todo)
            }}
            >NO</button>
            <button
             onClick={() => {
                props.deleteTodo(props.todo)
            }}
            >DELETE</button>
        </div>
    )
}
