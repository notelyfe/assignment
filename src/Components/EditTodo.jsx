import React, { useContext } from "react";
import style from "../Style/editTodo.module.css";
import Context from "../Context/Context";
import { toast } from "react-hot-toast";

const EditTodo = () => {

    const { setEdit, editData, setEditData, setTodoLists } = useContext(Context);

    const handelChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const editTodo = (e) => {
        e.preventDefault();

        let prevData = JSON.parse(localStorage.getItem("todos"));

        prevData.map((list, listIndex) => {
            if (list.id === editData.listId) {
                list.todos.map((item, index) => {
                    if (item.id === editData.todoId) {
                        let newTodo = {
                            id: item.id,
                            title: editData.title,
                            description: editData.description
                        }
                        list.todos.splice(index, 1, newTodo)
                        let newData = {
                            id: list.id,
                            title: list.title,
                            todos: list.todos
                        }
                        prevData.splice(listIndex, 1, newData)
                    }
                })
            }
        })
        localStorage.setItem('todos', JSON.stringify(prevData))
        setEditData({ title: '', description: '' })
        setEdit(false)
        let res = JSON.parse(localStorage.getItem('todos'))
        setTodoLists(res)
        toast.success('Todo edited successfully')
    };

    return (
        <div className={style.wrapper}>
            <header className={style.editHeader}>
                <h3>Edit Todo</h3>
                <button onClick={() => setEdit(false)}>&times;</button>
            </header>
            <section>
                <form onSubmit={editTodo} className={style.formControl}>
                    <input
                        type="text"
                        placeholder="Add Todo"
                        onChange={handelChange}
                        name="title"
                        value={editData.title}
                    />
                    <textarea
                        rows="4"
                        placeholder="Description"
                        onChange={handelChange}
                        name="description"
                        value={editData.description}
                    />
                    <button>Save</button>
                </form>
            </section>
        </div>
    );
};

export default EditTodo;
