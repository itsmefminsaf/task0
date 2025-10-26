import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { PiMaskSadLight } from "react-icons/pi";

const not_found = () => {
  return (
    <main className="center h-screen w-screen flex-col gap-2 text-center text-red-500">
      <h3 className="rounded-2xl bg-red-500 p-5 text-6xl font-extrabold text-white">
        404
      </h3>
      <PiMaskSadLight size={100} strokeWidth="10" />
      <h3 className="text-xl font-bold">Look like you are lost..!?</h3>
      <Link
        href="/"
        className="center mt-5 text-azure gap-2 rounded-full bg-teal-800 px-5 py-3 text-2xl font-bold text-white"
      >
        <BiHome size={30} /> Go Home safely
      </Link>
    </main>
  );
};

export default not_found;
