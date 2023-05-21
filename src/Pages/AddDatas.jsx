import React, { useState } from 'react'
import Header from '../Components/Header'
import AddTodoList from '../Components/AddTodoList'
import EditTodo from '../Components/EditTodo'

const AddDatas = () => {

  return (
    <div>
      <Header header="Add Data" />
      <AddTodoList />
      {/* <EditTodo /> */}
    </div>
  )
}

export default AddDatas
