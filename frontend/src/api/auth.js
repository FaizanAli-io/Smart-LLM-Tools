import axiosInstance from "./axiosInstance";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const signupUser = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export const listUsers = async () => {
  const response = await axiosInstance.get("/auth/all");
  return response.data;
};

export const updateRole = async (userData) => {
  const response = await axiosInstance.patch("/auth/update-role", userData);
  return response.data;
};
