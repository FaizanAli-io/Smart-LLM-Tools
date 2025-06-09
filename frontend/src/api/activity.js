// frontend/src/api/activity.js

import axiosInstance from "./axiosInstance";

/**
 * Fetches all activity data from the backend
 * @returns {Promise<Array>} Array of activity records
 */
export const getAllActivities = async () => {
  try {
    const response = await axiosInstance.get("/activity");
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

/**
 * Logs a new activity for a user
 * @param {number} userId - The ID of the user
 * @param {string} prompt - The prompt or activity text
 * @returns {Promise<Object>} The created activity
 */
export const logActivity = async (userId, prompt) => {
  try {
    const response = await axiosInstance.post("/activity", { userId, prompt });
    return response.data;
  } catch (error) {
    console.error("Error logging activity:", error);
    throw error;
  }
};
