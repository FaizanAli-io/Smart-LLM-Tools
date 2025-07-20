// src/api/user.js

import axiosInstance from "./axiosInstance";

/**
 * Fetch all users along with their allowed categories (Admin only)
 * @returns {Promise<Array>} Array of user objects
 */
export const getUsersWithCategories = async () => {
    try {
        const response = await axiosInstance.get("admin/users-with-categories");
        return response.data;
    } catch (error) {
        console.error("Error fetching users with categories:", error);
        throw error;
    }
};

/**
 * Update allowed categories for a specific user
 * @param {number} userId - ID of the user to update
 * @param {Array<string>} allowedCategories - Categories to allow
 * @returns {Promise<Object>} Updated user object
 */
export const updateUserCategories = async (userId, allowedCategories) => {
    try {
        const response = await axiosInstance.patch(`/admin/${userId}/categories`, {
            allowedCategories,
        });
        return response.data;
    } catch (error) {
        console.error("❌ Error updating user categories:", error?.response?.data || error.message);
        throw new Error("Failed to update");
    }
};

/**
 * Fetch allowed categories for the current logged-in user
 * @returns {Promise<Array<string>>} Array of allowed category IDs
 */
export const getMyAllowedCategories = async () => {
    try {
        const response = await axiosInstance.get("/admin/my-categories");
        return response.data; // e.g., ["fitness", "yoga"]
    } catch (error) {
        console.error("❌ Error fetching allowed categories:", error?.response?.data || error.message);
        return []; // fallback to empty array
    }
};
