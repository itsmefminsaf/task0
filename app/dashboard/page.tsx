import Auth0 from "@/lib/auth0";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await Auth0.getSession();

  if (!session || !session.user) return redirect("/auth/login");

  return <div>DashboardPage</div>;
};

export default DashboardPage;
