import React from 'react'
import { STATUS, TASKS } from '../utils/data'
import TaskColumn from './taskColumn/TaskColumn'

function Tasks() {
  return (
   <main className="flex gap-4 w-full p-4">
   {STATUS.map((status, index) => <TaskColumn key={index} title={status} tasks={TASKS}/>)}
 </main>
  )
}

export default Tasks