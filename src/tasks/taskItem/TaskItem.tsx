import React from "react";

function TaskItem(props) {
  const { id,status, taskStatus, title, description, tr, ti, deleteTask } = props;
  return (
   status === taskStatus  ?(
    <article className="p-4 rounded border border-blue-300 flex flex-col gap-2">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="flex justify-between">
         <p>TR : {tr}</p>
         <p>TI : {ti}</p>
      </div>
      <button type='button' onClick={()=>deleteTask(id)}>DELETE</button>
    </article>)
    : null 
  );
}

export default TaskItem;
