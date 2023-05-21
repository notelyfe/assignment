import React, { useEffect, useState } from 'react'
import style from '../Style/todolist.module.css'
import api from '../Services/api'
import { toast } from 'react-hot-toast'

import AddTodos from './AddTodos'
import AllTodos from './AllTodos'

const AddTodoList = () => {

    const [todoLists, setTodoLists] = useState(null)
    const [newTodoList, setNewTodoList] = useState('')

    const getTodoLists = async () => {

        try {

            const { data } = await api.get('/todo-list')

            setTodoLists(data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getTodoLists();
    }, [])

    const addNewTodoList = async (e) => {
        e.preventDefault()

        let data = {
            title: newTodoList,
            todos: []
        }

        try {

            const res = await api.post('/todo-list', data)

            setTodoLists([...todoLists, res.data])

            // if (res.status === 200) {
            setNewTodoList('')
            toast.success('todo added')
            // }

        } catch (error) {
            console.log(error)
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
                        <AddTodos id={item.id} title={item.title} />
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
