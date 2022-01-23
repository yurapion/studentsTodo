import React, {useEffect, useState} from 'react';
import TodoList from "./TodoList";

const NewTodoListWrapper = props => {
    const [todoListArray, setTodoListArray] = useState([])
    const [inputValue, setinputValue] = useState("")
    const makeTodoYes = (todo) => {
        const newArr = todoListArray.map(el => {
            if (el === todo) {
                el.result = true
            }
            return el
        })
        setTodoListArray([...newArr])
        setTodoListArrToPass([...newArr])
    }

    const makeTodoNo = (todo) => {
        const newArr = todoListArray.map(el => {
            if (el === todo) {
                el.result = false
            }
            return el
        })
        setTodoListArray([...newArr])
        setTodoListArrToPass([...newArr])
    }

    const deleteTodo = (todo) => {
        setTodoListArray(todoListArray.filter(el => el !== todo))
        setTodoListArrToPass(todoListArray.filter(el => el !== todo))
    }
    useEffect(() => {
        console.log(todoListArray)
    }, [todoListArray])

    const [todoListArrToPass, setTodoListArrToPass] = useState([])
    const completedFilter = () => {
        setFilter("COMPLETED")
        setTodoListArrToPass(
            todoListArray.filter(el => {
                return el.result === true
            })
        )
    }

    const completedActive = () => {
        setFilter("ACTIVE")
        setTodoListArrToPass(
            todoListArray.filter(el => {
                return el.result === false
            })
        )
    }


    const completedAll = () => {
        setTodoListArrToPass([...todoListArray])
    }

    const [filter, setFilter] = useState("ALL")
    const [changeTitle, setChangeTitle] = useState(false)
    const [titleInside, setTitleInside] = useState(props.title)
    return (
        <>
            {changeTitle ? (
                    <div>
                        <input value={titleInside} onChange={(event) => {
                            setTitleInside(event.target.value)
                        }} style={{
                            margin: "10px"
                        }}/>
                        <button onClick={() => {
                            setChangeTitle(false)
                            props.updateTitle(props.id, titleInside)
                        }}>save changes
                        </button>
                    </div>

                )
                :
                (
                    <h1 onClick={() => {
                        setChangeTitle(true)
                    }}>{titleInside}</h1>
                )}

            <input className={""} onChange={(e) => {
                setinputValue(e.target.value)
            }} value={inputValue}/>
            <button onClick={() => {
                setTodoListArray([...todoListArray, {value: inputValue, result: ""}])
                setTodoListArrToPass([...todoListArray, {value: inputValue, result: ""}])
                setinputValue('')
            }}>ADD TODO
            </button>

            <div>
                <button onClick={() => {
                    completedAll()
                }}>ALL
                </button>
                <button onClick={() => {
                    completedFilter()
                }}>COMPLETED
                </button>
                <button onClick={() => {
                    completedActive()
                }}>ACTIVE
                </button>
            </div>

            <TodoList leshaTodoList={todoListArrToPass} forTest="newPropforProps" makeTodoYes={makeTodoYes}
                      makeTodoNo={makeTodoNo} deleteTodo={deleteTodo}>
            </TodoList>
        </>
    );
};


export default NewTodoListWrapper;