import { BiSend } from "react-icons/bi";

const AIChat = () => {
  return (
    <section className="mt-28 flex w-screen justify-center">
      <div className="h-145 w-full p-3 md:w-250"></div>

      <div className="fixed bottom-0 left-1/2 mx-auto mb-10 flex w-11/12 -translate-x-1/2 items-end justify-center gap-2 rounded-2xl border-2 border-teal-800 bg-neutral-900 p-3 shadow-lg shadow-teal-600/10 md:w-200">
        <textarea
          rows={1}
          placeholder="What is your plan today..."
          className="max-h-44 w-full resize-none text-xl outline-none"
        />
        <button>
          <BiSend size={30} />
        </button>
      </div>
    </section>
  );
};

export default AIChat;
