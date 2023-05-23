import React, { useState } from 'react'
import moneybag from '../Assets/money-bag.png'
import style from '../Style/addTodos.module.css'
import { toast } from 'react-hot-toast'

const AddTodos = ({ id, setTodoLists }) => {

    const [todo, setTodo] = useState({ title: '', description: '' })

    const handelInputChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    const addNewTodo = async (e) => {
        e.preventDefault()

        let todoId = Math.floor(Math.random() * 1000)

        const data = {
            id: todoId,
            title: todo.title,
            description: todo.description
        }

        try {

            const res = JSON.parse(localStorage.getItem("todos"))

            res.map((item, index) => {
                if (item.id === id) {

                    var newData = {
                        id: item.id,
                        title: item.title,
                        todos: item.todos.concat(data)
                    }

                    res.splice(index, 1, newData)

                    localStorage.setItem('todos', JSON.stringify(res))

                    toast.success("Todo added successfully")
                }
            })

            const newResponse = JSON.parse(localStorage.getItem("todos"))
            setTodoLists(newResponse)
            setTodo({ title: '', description: '' })

        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <div className={style.addTodo}>
            <form onSubmit={addNewTodo}>
                <div className={style.todoheader}>
                    <div className={style.titleContainer}>
                        <img className={style.bag} src={moneybag} alt="" />
                        <input
                            type="text"
                            placeholder='Add Todo'
                            onChange={handelInputChange}
                            value={todo.title}
                            name='title'
                        />
                    </div>
                    <button
                        type='submit'
                        className={style.AddBtn}
                    >
                        +
                    </button>
                </div>
                <textarea
                    onChange={handelInputChange}
                    value={todo.description}
                    name='description'
                    rows="3"
                    placeholder='Add Todo Description'
                />
            </form>
        </div>
    )
}

export default AddTodos
