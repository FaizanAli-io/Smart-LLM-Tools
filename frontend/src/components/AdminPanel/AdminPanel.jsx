import React, { useState, useEffect } from "react";
import { getAllActivities } from "../../api/activity"; // adjust path as needed
import "./AdminPanel.css";

export default function AdminPanel() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Stats for the dashboard cards
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalPrompts: 0,
    avgSessionTime: 0
  });
  
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getAllActivities();
        setUserData(data);
        
        // Calculate dashboard stats from the actual data
        if (data && data.length > 0) {
          // Get unique users
          const uniqueUsers = [...new Set(data.map(item => item.user?.id))].filter(Boolean);
          
          // Calculate active users (users with activity in the last 24 hours)
          const oneDayAgo = new Date();
          oneDayAgo.setDate(oneDayAgo.getDate() - 1);
          const recentUsers = [...new Set(
            data.filter(item => new Date(item.loggedAt) > oneDayAgo)
              .map(item => item.user?.id)
          )].filter(Boolean);
          
          // Count total prompts
          const totalPrompts = data.length;
          
          // For avg session time, we'd need session data, using placeholder for now
          // In a real implementation, this would come from session analytics
          const avgSessionTime = 10.5;
          
          setStats({
            totalUsers: uniqueUsers.length,
            activeUsers: recentUsers.length,
            totalPrompts: totalPrompts,
            avgSessionTime: avgSessionTime
          });
        }
      } catch (err) {
        console.error('Error fetching activity data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchActivities();
  }, []);
  
  // Format the API data to match our display format
  // Based on your Activity entity, we only have id, user, prompt, and loggedAt
  const formattedUserData = userData.map((activity, index) => ({
    id: activity.id || index,
    username: activity.user?.username || 'Unknown User',
    timestamp: activity.loggedAt || new Date().toISOString(),
    prompt: activity.prompt || ''
  }));
  
  // Filter user data based on search query
  const filteredUserData = formattedUserData.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.prompt?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  
  return (
    <div className="admin-panel-section">
      {/* Header with gradient styling */}
      <div className="admin-header-section">
        <div className="hero-decoration">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="admin-header admin-container">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-description">Monitor user activities and system performance</p>
        </div>
      </div>
      
      <div className="admin-content">
        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <button 
            className={`admin-tab-button ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <div className="tab-icon">D</div>
            Dashboard
          </button>
          <button 
            className={`admin-tab-button ${activeTab === "activities" ? "active" : ""}`}
            onClick={() => setActiveTab("activities")}
          >
            <div className="tab-icon">A</div>
            User Activities
          </button>
          <button 
            className={`admin-tab-button ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            <div className="tab-icon">S</div>
            Analytics
          </button>
          <button 
            className={`admin-tab-button ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <div className="tab-icon">C</div>
            Settings
          </button>
        </div>
        
        {/* Dashboard Tab Content */}
        {activeTab === "dashboard" && (
          <div className="dashboard-content">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <span>U</span>
                </div>
                <div className="stat-info">
                  <h3>Total Users</h3>
                  <p className="stat-value">{stats.totalUsers}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <span>A</span>
                </div>
                <div className="stat-info">
                  <h3>Active Users</h3>
                  <p className="stat-value">{stats.activeUsers}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <span>P</span>
                </div>
                <div className="stat-info">
                  <h3>Total Prompts</h3>
                  <p className="stat-value">{stats.totalPrompts}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <span>T</span>
                </div>
                <div className="stat-info">
                  <h3>Avg. Session (min)</h3>
                  <p className="stat-value">{stats.avgSessionTime}</p>
                </div>
              </div>
            </div>
            
            <div className="recent-activity-container">
              <h2 className="section-title">Recent Activity</h2>
              {isLoading ? (
                <div className="loading-spinner">Loading...</div>
              ) : (
                <div className="recent-activity-list">
                  {formattedUserData.slice(0, 5).map((user) => (
                    <div key={user.id} className="activity-item">
                      <div className="activity-icon">
                        <span>{user.username.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="activity-details">
                        <h4 className="activity-user">{user.username}</h4>
                        <p className="activity-action">{user.prompt}</p>
                      </div>
                      <div className="activity-time">
                        {formatDate(user.timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* User Activities Tab Content */}
        {activeTab === "activities" && (
          <div className="activities-content">
            <div className="search-filter-container">
              <div className="admin-search-container">
                <input 
                  type="text"
                  className="admin-search-input"
                  placeholder="Search users or prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="admin-search-button">
                  <span>🔍</span>
                </button>
              </div>
            </div>
            
            {isLoading ? (
              <div className="loading-spinner">Loading...</div>
            ) : (
              <div className="activities-table-container">
                <table className="activities-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Prompt</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUserData.map(user => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.prompt}</td>
                        <td>{formatDate(user.timestamp)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        
        {/* Placeholder for Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="placeholder-content">
            <div className="placeholder-icon">📊</div>
            <h2>Analytics Dashboard</h2>
            <p>Detailed analytics features would be implemented here.</p>
          </div>
        )}
        
        {/* Placeholder for Settings Tab */}
        {activeTab === "settings" && (
          <div className="placeholder-content">
            <div className="placeholder-icon">⚙️</div>
            <h2>Settings</h2>
            <p>System configuration and user management options would be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
}