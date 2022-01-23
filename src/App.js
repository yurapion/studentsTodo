import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import {useState, useEffect} from 'react';
import NewTodoListWrapper from "./newTODOListWrapper";

function App() {

    const [newTODOlistArr, setNewTODOlistArr] = useState([])
    const [title, setTitle] = useState("")

    useEffect(() => {
        console.log(newTODOlistArr)
    }, [newTODOlistArr])
    const updateTitle = (id, title) => {
        setNewTODOlistArr(newTODOlistArr.map(el => {
            if (el.id === id) el.title = title
            return el
        }))
    }
    return (
        <>
            <input value={title} onChange={(event) => {
                setTitle(event.target.value)
            }}/>
            <button onClick={() => {
                setNewTODOlistArr([...newTODOlistArr, {title: title, id: (Math.random() * 10000).toFixed(0)}])
            }}>ADD NEW TODO LIST
            </button>
            {newTODOlistArr.map(el => (
                <div id={el.id}>
                    <NewTodoListWrapper title={el.title} id={el.id} updateTitle={updateTitle}/>
                </div>

            ))}
            {/*<NewTodoListWrapper/>*/}
        </>
    );
}

export default App;
