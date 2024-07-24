import React from 'react'
import TaskItem from '../taskItem/TaskItem';

function TaskColumn({ title, tasks }) {
    return (
    <div className='flex-1 p-2 border border-slate-300 flex flex-col gap-4'>
      <h2 className='text-xl text-blue-500 font-normal'>{title}</h2>
       {tasks.map((task, index) => <TaskItem key={index} status={title} title={task.title} taskStatus={task.status} description={task.description} tr={task.tr} ti={task.ti}/>)} 
    </div>
  )
}

export default TaskColumn