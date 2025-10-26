import getTasks from "@/lib/actions/getTasks";
import { tasks_v1 } from "googleapis";
import Task from "./Task";

const TaskList = async ({
  taskList,
}: {
  taskList: tasks_v1.Schema$TaskList;
}) => {
  if (!taskList || !taskList.id) return;

  const tasks = await getTasks(taskList.id);
  return (
    <div className="max-h-100 h-fit overflow-y-scroll w-120 rounded-2xl bg-teal-800 p-5">
      <h3 className="text-2xl font-bold">{taskList.title}</h3>
      <ul className="space-y-1 pt-2">
        {tasks?.map((task, index) => <Task key={index} task={task}/>)}
      </ul>
    </div>
  );
};

export default TaskList;
