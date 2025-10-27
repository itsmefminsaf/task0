"use server";

import { PushOperator } from "mongodb";
import chatGPT from "../chatGPT";
import connectDB from "../mongodb";
import { messageType } from "../types/message";

const handlePrompt = async (
  email: string,
  useMessage: messageType,
  conversation: messageType[],
): Promise<messageType | null> => {
  try {
    const aiResponse = await chatGPT(useMessage.text, conversation);
    const timeStamp = new Date();
    const newAIMessage: messageType = {
      author: "assistant",
      text: aiResponse,
      timeStamp,
    };

    const db = await connectDB();
    const updated = await db.updateOne(
      { email },
      {
        $push: {
          conversation: {
            $each: [useMessage, newAIMessage],
          },
        },
      } as PushOperator<Document>,
      { upsert: true },
    );

    return updated.acknowledged ? newAIMessage : null;

    return newAIMessage;
  } catch (error) {
    throw error;
  }
};

export default handlePrompt;
