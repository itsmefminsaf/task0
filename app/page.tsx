import Auth0 from "@/lib/auth0";
import Image from "next/image";
import { redirect } from "next/navigation";
import logo from "@/assets/task0.png";
import Link from "next/link";
import { BiBrain, BiCheckCircle } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";

const HomePage = async () => {
  const session = await Auth0.getSession();

  if (session?.user) return redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-gray-950 via-gray-900 to-black px-6 text-white">
      <div className="flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-3">
          <Image
            src={logo}
            alt="Task0 Logo"
            width={70}
            height={70}
            className="rounded-xl"
          />
          <h1 className="text-5xl font-extrabold tracking-tight">Task0</h1>
        </div>

        <p className="mb-10 text-lg text-gray-300">
          Your AI-powered task manager. Work smarter — not just harder.
        </p>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard/ai"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            <span className="inline-flex items-center gap-2">
              <BiBrain className="h-5 w-5" />
              Try AI Mode
            </span>
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            <span className="inline-flex items-center gap-2">
              <BiCheckCircle className="h-5 w-5" />
              Manual Mode
            </span>
          </Link>
        </div>
      </div>

      <section className="grid w-full max-w-5xl gap-6 px-4 sm:grid-cols-3">
        {[
          {
            icon: <BiBrain className="h-8 w-8 text-emerald-400" />,
            title: "AI-Powered Tasks",
            desc: "Let AI organize, prioritize, and even create your tasks from simple prompts.",
          },
          {
            icon: <GiSparkles className="h-8 w-8 text-emerald-400" />,
            title: "Smart Summaries",
            desc: "See your day or week in plain language with automatic insights.",
          },
          {
            icon: <BiCheckCircle className="h-8 w-8 text-emerald-400" />,
            title: "Seamless Control",
            desc: "Switch freely between AI and manual mode — stay in control, always.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 transition-colors hover:border-emerald-400/60"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="mt-20 text-sm text-gray-600">
        {new Date().getFullYear()} Task0 — Built with curiosity and caffeine.
      </footer>
    </main>
  );
};

export default HomePage;
