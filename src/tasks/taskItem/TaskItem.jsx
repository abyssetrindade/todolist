import React, { useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContextProvider";

function TaskItem({ task, deleteTask, taskStatus }) {

  const { addToBasket } = useContext(ApplicationContext);


  return (
    task.status === taskStatus ? (
      <article className="p-4 rounded border border-blue-300 flex flex-col gap-2">
        <h3 className="font-semibold text-xl">{task.title}</h3>
        <p className="text-slate-600">{task.description}</p>
        <div className="flex justify-between">
          <p>TR : {task.tr}</p>
          <p>TI : {task.ti}</p>
        </div>
        <button type='button' onClick={() => deleteTask(task.id)}>DELETE</button>
        <button type='button' onClick={() => addToBasket(task)}>ADD COUNTER</button>

      </article>)
      : null
  );
}

export default TaskItem;
