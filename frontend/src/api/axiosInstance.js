// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://786b-13-51-199-66.ngrok-free.app/api", // or your deployed backend
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
