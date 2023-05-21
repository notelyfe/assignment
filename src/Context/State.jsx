import React, { useState } from 'react'
import Context from './Context';

const State = (props) => {

    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState({ title: '', description: '', todoId: '', listId: '' })

    return (
        <Context.Provider value={{ setEdit, edit, setEditData, editData }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;