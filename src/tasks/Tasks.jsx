import React, { useEffect, useState } from 'react'
import { STATUS } from '../utils/data'
import TaskColumn from './taskColumn/TaskColumn'
import { search, remove } from '../services/scrud';

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await search({ path: "tasks" });
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, [])


  const deleteTask = async (taskId) => {
    console.log(taskId);
    const response = await remove({ path: "tasks", id: taskId });
    if(response.status === 200)
      getTasks();
  };

  return (
    <main className="flex gap-4 w-full p-4">
      {STATUS.map((status, index) => <TaskColumn key={index} title={status} tasks={tasks} deleteTask={(currentid) => deleteTask(currentid)} />)}
    </main>
  )
}

export default Tasks