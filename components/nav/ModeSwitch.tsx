"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BsStars } from "react-icons/bs";

const ModeSwitch = () => {
  const { user } = useUser();
  const param = usePathname();
  const [aiMode, setAIMode] = useState(param === "/dashboard/ai");
  const router = useRouter();

  const changeMode = () => {
    setAIMode(!aiMode);
    router.push(`/dashboard/${aiMode ? "" : "ai"}`);
  };

  return user ? (
    <button
      className="center relative z-0 w-44 list-none gap-2 justify-self-center rounded-full bg-neutral-200 px-2"
      onClick={changeMode}
    >
      <span
        className={`absolute left-2 z-10 h-10 w-20 rounded-full duration-300 ${aiMode ? "translate-x-20 bg-linear-to-br from-teal-800 to-teal-600" : "translate-x-0 bg-teal-800"}`}
      >
        {aiMode && (
          <BsStars className="absolute top-0 right-3 rotate-90" size={20} />
        )}
      </span>
      <li
        className={`z-20 w-20 rounded-full px-2 py-1 duration-300 ${aiMode ? "text-black" : "text-neutral-200"}`}
      >
        Manual
      </li>
      <li
        className={`z-20 w-20 rounded-full px-2 py-1 duration-300 ${aiMode ? "text-neutral-200" : "text-black"}`}
      >
        AI mode
      </li>
    </button>
  ) : (
    <span />
  );
};

export default ModeSwitch;
