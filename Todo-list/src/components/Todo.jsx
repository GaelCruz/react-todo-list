import React from 'react'

export default function Todo({task, toggleComplete}) {
  return (
    <div className='todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <button >edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}
