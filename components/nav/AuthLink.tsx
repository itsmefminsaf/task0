"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { SiAuth0 } from "react-icons/si";

const AuthLink = () => {
  const { user } = useUser();
  return (
    <Link
      href={`/auth/${user ? "logout" : "login"}`}
      className="center gap-2 rounded-full bg-neutral-200 px-4 py-2 text-xl font-extrabold text-teal-800 duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
    >
      {user ? (
        <>
          {user.email}
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
