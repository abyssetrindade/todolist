import React from 'react'
import TaskItem from '../taskItem/TaskItem';

function TaskColumn({ title, tasks, deleteTask}) {
    return (
    <div className='flex-1 p-2 border rounded border-blue-300 flex flex-col gap-4'>
      <h2 className='text-xl text-blue-500 font-bold'>{title}</h2>
       {tasks.map((task, index) => <TaskItem key={index} id={task.id} status={title} title={task.title} taskStatus={task.status} description={task.description} tr={task.tr} ti={task.ti} deleteTask={(currentid) =>deleteTask(currentid)}/>)} 
    </div>
  )
}

export default TaskColumn