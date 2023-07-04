import React from 'react'

export default function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className='Todo'>
      <p className={task.completed ? 'completed' : ""} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <button onClick={() => editTodo(task.id)}>edit</button>
        <button onClick={() => deleteTodo(task.id)}>delete</button>
      </div>
    </div>
  )
}
