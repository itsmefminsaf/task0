import OpenAI from "openai";
import { messageType } from "./types/message";
import getTaskLists from "./actions/getTaskLists";
import getTasks from "./actions/getTasks";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OR_API_KEY,
});

const chatGPT = async (prompt: string, conversation: messageType[]) => {
  const tools: OpenAI.Responses.Tool[] = [
    {
      strict: true,
      type: "function",
      name: "getTaskList",
      description: "Get the user's Google Task lists.",
      parameters: {
        type: "object",
        properties: {},
      },
    },
    {
      strict: true,
      type: "function",
      name: "getTasks",
      description: "Get the user's Google Tasks for a task list.",
      parameters: {
        type: "object",
        properties: {
          list: { type: "string", description: "the task list id" },
        },
      },
    },
    {
      strict: true,
      type: "function",
      name: "createTaskList",
      description: "Create a task list",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "The name of the task list" },
        },
      },
    },
    {
      strict: true,
      type: "function",
      name: "createTask",
      description: "Create a task in a task list.",
      parameters: {
        type: "object",
        properties: {},
      },
    },
  ];

  const toolResponse = await openai.responses.create({
    model: "openai/gpt-oss-20b:free",
    input: [{ role: "user", content: prompt }],
    tools,
  });

  let toolMessages: any[] = [];

  for (const item of toolResponse.output) {
    if (item.type === "function_call" && item.name === "getTaskList") {
      const taskLists = await getTaskLists();
      toolMessages.push({
        role: "tool",
        tool_call_id: item.id,
        content: JSON.stringify(taskLists),
      });
    } else if (item.type === "function_call" && item.name === "getTasks") {
      const tasks = await getTasks(item.arguments);
      toolMessages.push({
        role: "tool",
        tool_call_id: item.id,
        content: JSON.stringify(tasks),
      });
    }
  }

  const oldMessages = conversation.map((msg) => ({
    role: msg.author,
    content: msg.text,
  }));

  const messages = [
    ...oldMessages,
    { role: "user", content: prompt },
    ...toolMessages,
  ];

  const response = await openai.chat.completions.create({
    model: "openai/gpt-oss-20b:free",
    messages,
  });

  return response.choices[0]?.message?.content ?? "";
};

export default chatGPT;
