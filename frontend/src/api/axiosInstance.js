// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-ai-biz-services.bizg.co.uk/api", // or your deployed backend
  // baseURL:"http://localhost:3000/api/"
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
