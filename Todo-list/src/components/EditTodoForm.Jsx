import React, { useState } from 'react'

export default function EditTodoForm({editTodo, task}) {

  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder='update your task?' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit'>Update Task</button>
    </form>
  )
}
