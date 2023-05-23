import React, { useContext, useEffect, useState } from 'react'
import style from '../Style/todolist.module.css'
import { toast } from 'react-hot-toast'
import AddTodos from './AddTodos'
import AllTodos from './AllTodos'
import Context from '../Context/Context'

const AddTodoList = () => {

    // const [todoLists, setTodoLists] = useState(null)
    const { todoLists, setTodoLists } = useContext(Context)
    const [newTodoList, setNewTodoList] = useState('')

    const getTodoLists = async () => {

        try {

            const todoList = JSON.parse(localStorage.getItem("todos"))

            setTodoLists(todoList)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getTodoLists();
    }, [])

    const addNewTodoList = async (e) => {
        e.preventDefault()

        var id = Math.floor(Math.random() * 1000)

        let data = [{
            id: id,
            title: newTodoList,
            todos: [],
        }]

        try {

            const res = JSON.parse(localStorage.getItem("todos"))

            if (res) {

                let newData = res.concat(data)

                localStorage.setItem("todos", JSON.stringify(newData))

                const newList = JSON.parse(localStorage.getItem("todos"))

                setTodoLists(newList)

            } else {
                localStorage.setItem("todos", JSON.stringify(data))

                const newList = JSON.parse(localStorage.getItem("todos"))

                setTodoLists(newList)
            }

            setNewTodoList('')
            toast.success("New TodoList added successfully");

        } catch (error) {
            toast.error("Error submitting new todo");
        }
    }

    return (
        <div className={style.todoListContainer}>
            {todoLists?.map((item) => {
                return (
                    <div key={item.id} className={style.wrapper}>
                        <div className={style.todolist}>
                            <p>List: {item.title}</p>
                        </div>
                        <AddTodos id={item.id} setTodoLists={setTodoLists} />
                        {item?.todos?.map((todo) => {
                            return (
                                <AllTodos key={todo.title} todo={todo} listId={item.id} />
                            )
                        })}
                    </div>
                )
            })}
            <form onSubmit={addNewTodoList} className={style.todolist}>
                <input
                    className={style.formControl}
                    type="text"
                    placeholder='Add Todo-List'
                    onChange={(e) => setNewTodoList(e.target.value)}
                    value={newTodoList}
                />
                <button onClick={addNewTodoList} className={style.AddBtn}>+</button>
            </form>
        </div>
    )
}

export default AddTodoList
