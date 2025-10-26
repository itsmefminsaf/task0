import Auth0 from "@/lib/auth0";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await Auth0.getSession();

  if (session?.user) return redirect("/dashboard");

  return <main>Landing Page</main>;
};

export default HomePage;
