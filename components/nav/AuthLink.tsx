"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { SiAuth0 } from "react-icons/si";

const AuthLink = () => {
  const { user, isLoading } = useUser();
  return isLoading ? (
    <span className="animate-load h-12 w-44 justify-self-end rounded-full bg-[length=200%] bg-linear-to-r from-neutral-50/40 via-neutral-100 to-neutral-50/40" />
  ) : (
    <Link
      href={`/auth/${user ? "logout" : "login"}`}
      className="center w-44 gap-2 justify-self-end rounded-full bg-neutral-200 px-4 py-2 font-extrabold text-teal-800 duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
    >
      {user ? (
        <>
          <h1 className="w-32 truncate">{user.name}</h1>
          <BiLogOut />
        </>
      ) : (
        <>
          login <SiAuth0 size={25} />
        </>
      )}
    </Link>
  );
};

export default AuthLink;
