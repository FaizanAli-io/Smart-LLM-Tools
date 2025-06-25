// src/api/gpt.js
import axiosInstance from "./axiosInstance";

export const generateFromPrompt = async (prompt, userId) => {

  const cleanedPrompt = prompt.replace(/—/g, "").trim();
  const britishPrompt = `${cleanedPrompt}

Please respond using proper British English spelling, vocabulary, and sentence structure. Avoid using em-dashes (—), Markdown formatting (like **bold** or bullets), and write in full paragraphs unless otherwise instructed. Use formal but clear tone as per UK business writing standards.`;
  const gpt_response = await axiosInstance.post("/gpt/generate", { prompt: britishPrompt });
  await axiosInstance.post("/activity", { userId, prompt: britishPrompt });
  return gpt_response.data;
};

