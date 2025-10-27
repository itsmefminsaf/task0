import AIChat from "@/components/AIChat";
import Auth0 from "@/lib/auth0";
import { redirect } from "next/navigation";

const AIDashboardPage = async () => {
  const session = await Auth0.getSession();

  if (!session || !session.user) return redirect("/auth/login");

  return <AIChat email={session.user.email!} />;
};

export default AIDashboardPage;
