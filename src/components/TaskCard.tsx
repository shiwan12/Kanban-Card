import { useState } from "react";

import { MdDelete } from "react-icons/md";
import { Id, Task } from "../type";
interface Props{
    task:Task;
    deleteTask:(id:Id)=>void;
}

function TaskCard({task, deleteTask}:Props) {
   const [mouseOver, setMouseOver]=useState(false) ;
  return (
    <div className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center hover:ring-inset hover:ring-rose-500 cursor-grab relative"
    onMouseEnter={() => {
        setMouseOver(true);
    }}
    onMouseLeave={() => {
        setMouseOver(false);
    }}
>
    {task.content}
    {mouseOver && (
        <button 
            onClick={() => {
                deleteTask(task.id);
            }}
            className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
        >
            <MdDelete />
        </button>
    )}
</div>
  )
}

export default TaskCard;
