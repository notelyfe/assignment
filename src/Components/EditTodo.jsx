import React, { useContext, useState } from "react";
import style from "../Style/editTodo.module.css";
import Context from "../Context/Context";

const EditTodo = () => {

    const { setEdit, editData } = useContext(Context);
    const [todo, setTodo] = useState({ title: editData.title, description: editData.description, });

    const handelChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const editTodo = (e) => {
        e.preventDefault();

        let prevData = JSON.parse(localStorage.getItem("todos"));

    // prevData.map((list, index) => {
    //   if (list.id === editData.listId) {
    //     list.todos.map((item) => {
    //       if (item.id === editData.todoId) {
    //         console.log("item", item);
    //       }
    //     });
    //   }
    // });
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
            value={todo.title}
                  />
                  <textarea
            rows="3"
            placeholder="Description"
            onChange={handelChange}
            name="description"
            value={todo.description}
                  />
                  <button>Submit</button>
              </form>
          </section>
      </div>
  );
};

export default EditTodo;
