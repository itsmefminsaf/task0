import Image from "next/image";
import logo from "@/assets/task0.png";

const Logo = () => {
  return (
    <div className="center gap-1 pl-8">
      <Image
        src={logo.src}
        alt="Logo of Task zero"
        className="size-8 md:size-12"
        width={50}
        height={50}
      />
      <h1 className="text-xl font-extrabold md:text-4xl">Task0</h1>
    </div>
  );
};

export default Logo;
