import logo from "@/assets/task0.png";
import Image from "next/image";
import { RiLoader3Fill } from "react-icons/ri";

const Loading = () => {
  return (
    <main className="center relative h-screen w-screen">
      <Image src={logo} width={80} height={80} alt="Logo of Task0" />
      <RiLoader3Fill
        className="absolute animate-spin"
        size={220}
      />
    </main>
  );
};

export default Loading;
