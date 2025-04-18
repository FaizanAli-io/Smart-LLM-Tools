// frontend/src/api/activity.js

// Base URL for your backend API
const API_BASE_URL = 'http://localhost:3000/api'; // Change this to match your backend URL

/**
 * Fetches all activity data from the backend
 * @returns {Promise<Array>} Array of activity records
 */
export const getAllActivities = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/activity`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching activities:', error);
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
    const response = await fetch(`${API_BASE_URL}/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, prompt }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging activity:', error);
    throw error;
  }
};