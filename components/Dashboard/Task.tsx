import { tasks_v1 } from "googleapis";

const Task = ({ task }: { task: tasks_v1.Schema$Task }) => {
  const due = task.due ? new Date(task.due) : "";

  return (
    <li className="rounded-lg bg-neutral-800 px-3 p-1 font-black">
      {task.title}
      <p className="ml-2 text-sm font-medium">{task.notes}</p>
      <p className="w-fit rounded-full bg-teal-100/10 m-1 px-2 py-1 text-xs">
        {due.toLocaleString()}
      </p>
    </li>
  );
};

export default Task;
