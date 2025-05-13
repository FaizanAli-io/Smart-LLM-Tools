// src/api/gpt.js
import axiosInstance from "./axiosInstance";

export const generateFromPrompt = async (prompt) => {
  const response = await axiosInstance.post("/gpt/generate", { prompt });
  return response.data;
};
