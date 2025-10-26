import TaskList from "@/components/Dashboard/TaskList";
import getTaskLists from "@/lib/actions/getTaskLists";
import Auth0 from "@/lib/auth0";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await Auth0.getSession();

  if (!session || !session.user) return redirect("/auth/login");

  const taskLists = await getTaskLists();

  return (
    <main className="center mt-28 w-screen">
      <div className="flex flex-wrap justify-center gap-3 p-3">
        {taskLists?.map((taskList, index) => (
          <TaskList taskList={taskList} key={index} />
        ))}
        {taskLists?.length === 0 && (
          <p>
            No task list found.{" "}
            <span className="text-teal-400">Ask the AI</span> to create one.
          </p>
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
