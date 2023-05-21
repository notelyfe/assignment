import React, { useContext, useState } from 'react'
import style from '../Style/editTodo.module.css'
import Context from '../Context/Context'

const EditTodo = () => {

  const { setEdit, editData } = useContext(Context)

  console.log("data", editData)

  return (
    <div className={style.wrapper}>
      <header className={style.editHeader}>
        <h3>Edit Todo</h3>
        <button onClick={() => setEdit(false)}>&times;</button>
      </header>
      <section>
        <form className={style.formControl}>
          <input
            type="text"
            placeholder='Add Todo'
            value={editData.title}
          />
          <textarea
            rows="3"
            placeholder='Description'
            value={editData.description}
          />
          <button>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default EditTodo
