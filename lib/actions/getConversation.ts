"use server";

import connectDB from "../mongodb";
import { messageType } from "../types/message";

const getConversation = async (email: string): Promise<messageType[]> => {
  try {
    const db = await connectDB();
    const user = await db.findOne(
      { email },
      { projection: { _id: 0, conversation: 1 } },
    );

    if (!user || !user.conversation) return [];

    return user.conversation;
  } catch (error) {
    throw error;
  }
};

export default getConversation;
