import OpenAI from "openai";
import { messageType } from "./types/message";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OR_API_KEY,
});

const chatGPT = async (prompt: string, conversation: messageType[]) => {
  const oldMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] =
    conversation.map((message) => ({
      role: message.author,
      content: message.text,
    }));

  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    ...oldMessages,
    { role: "user", content: prompt },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-5",
    messages,
  });

  const aiResponse = response.choices[0].message.content
    ? response.choices[0].message.content
    : "";

  return aiResponse;
};

export default chatGPT;
