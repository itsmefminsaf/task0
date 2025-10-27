"use client";

import getConversation from "@/lib/actions/getConversation";
import { messageType } from "@/lib/types/message";
import { KeyboardEvent, useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import Message from "./aiChat/Message";
import handlePrompt from "@/lib/actions/handlePrompt";

const AIChat = ({ email }: { email: string }) => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<messageType[]>([]);
  const [prompt, setPrompt] = useState("");
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    (async () => {
      const fetchedConversation = await getConversation(email);
      setConversation(fetchedConversation);
    })();
  }, [email]);

  const handleSubmit = async () => {
    setPrompt("");
    const timeStamp = new Date();
    const newUserMessage: messageType = {
      author: "user",
      text: prompt,
      timeStamp,
    };
    setConversation([...conversation, newUserMessage]);

    setThinking(true);

    const newAIMessage = await handlePrompt(
      email,
      newUserMessage,
      conversation,
    );

    if (newAIMessage) {
      setConversation([...conversation, newUserMessage, newAIMessage]);
    }

    setThinking(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="mt-28 flex w-screen justify-center">
      <div className="h-145 w-full p-3 md:w-250">
        {loading ? (
          <div>Loading conversation</div>
        ) : conversation.length === 0 ? (
          <div>no messages found</div>
        ) : (
          conversation.map((message, index) => (
            <Message message={message} key={index} />
          ))
        )}
        {thinking && <h1>AI is thinking...</h1>}
      </div>

      <div className="fixed bottom-0 left-1/2 mx-auto mb-10 flex w-11/12 -translate-x-1/2 items-end justify-center gap-2 rounded-2xl border-2 border-teal-800 bg-neutral-900 p-3 shadow-lg shadow-teal-600/10 md:w-200">
        <textarea
          rows={prompt.split("\n").length}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What is your plan today..."
          className="max-h-44 w-full resize-none text-xl outline-none"
        />
        <button onClick={handleSubmit}>
          <BiSend size={30} />
        </button>
      </div>
    </section>
  );
};

export default AIChat;
