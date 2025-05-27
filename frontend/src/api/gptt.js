// src/api/gpt.js
import axiosInstance from "./axiosInstance";

export const generateFromPrompt = async (prompt, userId) => {
  const gpt_response = await axiosInstance.post("/gpt/generate", { prompt });
  await axiosInstance.post("/activity", { userId, prompt });

  return gpt_response.data;
};
