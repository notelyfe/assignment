import React, { useState } from 'react'
import moneybag from '../Assets/money-bag.png'
import style from '../Style/addTodos.module.css'
import api from '../Services/api'
import { toast } from 'react-hot-toast'

const AddTodos = ({ id, title }) => {

    const [todo, setTodo] = useState({ title: '', description: '' })

    const handelInputChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    const addNewTodo = async (e) => {
        e.preventDefault()

        const data = [{
            title: todo.title,
            description: todo.description
        }]

        try {

            const res = await api.put(`/todo-list/${id}`, { title: title, todos: data })

            console.log("res", res)

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
