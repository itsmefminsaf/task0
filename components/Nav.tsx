import Image from "next/image";
import logo from "@/assets/task0.png";

const Nav = () => {
  return (
    <nav className="from-tiffany-blue/30 shadow-french-gray fixed top-3 left-1/2 w-[90vw] -translate-x-1/2 rounded-full bg-linear-to-br to-teal-300/30 p-2 shadow-2xl backdrop-blur-2xl">
      <div className="center gap-1">
        <Image src={logo.src} alt="Logo of Task zero" width={50} height={50} />
        <h1 className="text-4xl font-extrabold">Task0</h1>
      </div>
    </nav>
  );
};

export default Nav;
