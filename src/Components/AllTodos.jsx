import React, { useContext } from 'react'
import style from '../Style/allTodos.module.css'
import moneybag from '../Assets/money-bag.png'
import { FiEdit3 } from "react-icons/fi";
import Context from '../Context/Context'

const AllTodos = ({ todo, listId }) => {

    const { setEdit, setEditData } = useContext(Context)

    const editTodoData = () => {
        setEdit(true)
        setEditData({
            title: todo.title,
            description: todo.description,
            listId: listId,
            todoId: todo.id
        })
    }

    return (
        <div className={style.wrapper}>
            <div className={style.todoheader}>
                <div className={style.titleContainer}>
                    <img className={style.bag} src={moneybag} alt="" />
                    <h3>{todo?.title}</h3>
                </div>
                <button
                    onClick={editTodoData}
                    className={style.AddBtn}
                >
                    <FiEdit3 />
                </button>
            </div>
            <div className={style.descriptionWrapper}>
                <p>{todo?.description}</p>
            </div>
        </div>
    )
}

export default AllTodos
