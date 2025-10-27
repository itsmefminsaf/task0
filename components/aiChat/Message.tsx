import { messageType } from "@/lib/types/message";
import Image from "next/image";
import logo from "@/assets/task0.png";
import { BiUser } from "react-icons/bi";

const Message = ({ message }: { message: messageType }) => {
  return (
    <div className="grid p-2 grid-cols-[40px_1fr]">
      <div className="center row-span-2 size-10">
        {message.author === "assistant" ? (
          <Image alt="Ai profile" src={logo} width={30} height={30} />
        ) : (
          <BiUser size={25} />
        )}
      </div>
      <time
        dateTime={message.timeStamp.toLocaleString()}
        className="text-sm text-neutral-500"
      >
        {message.timeStamp.toString()}
      </time>
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
