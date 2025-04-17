import React, { useState, useEffect } from "react";
import "./AdminPanel.css";

export default function AdminPanel() {
  // Sample user activity data - in a real app, this would come from an API
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample stats for the dashboard cards
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalPrompts: 0,
    avgSessionTime: 0
  });
  
  useEffect(() => {
    // Simulate API call to fetch user data
    setTimeout(() => {
      const mockUserData = [
        { id: 1, username: "user123", action: "Created prompt", category: "Content Writing", timestamp: "2025-04-18T08:30:00" },
        { id: 2, username: "designer45", action: "Used service", category: "Design", timestamp: "2025-04-18T09:15:00" },
        { id: 3, username: "marketer22", action: "Saved template", category: "Marketing", timestamp: "2025-04-18T10:22:00" },
        { id: 4, username: "coder99", action: "Generated code", category: "Development", timestamp: "2025-04-18T11:05:00" },
        { id: 5, username: "writer77", action: "Edited prompt", category: "Content Writing", timestamp: "2025-04-17T14:40:00" },
        { id: 6, username: "analyst5", action: "Downloaded result", category: "Analysis", timestamp: "2025-04-17T16:20:00" },
        { id: 7, username: "manager33", action: "Shared template", category: "Management", timestamp: "2025-04-17T17:15:00" },
        { id: 8, username: "student12", action: "Created prompt", category: "Education", timestamp: "2025-04-16T09:30:00" },
        { id: 9, username: "researcher8", action: "Used service", category: "Research", timestamp: "2025-04-16T11:45:00" },
        { id: 10, username: "assistant66", action: "Generated response", category: "Customer Support", timestamp: "2025-04-16T13:10:00" }
      ];
      
      setUserData(mockUserData);
      setStats({
        totalUsers: 238,
        activeUsers: 45,
        totalPrompts: 892,
        avgSessionTime: 12.5
      });
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Filter user data based on search query
  const filteredUserData = userData.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.category.toLowerCase().includes(searchQuery.toLowerCase())
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
              <div className="recent-activity-list">
                {userData.slice(0, 5).map((user) => (
                  <div key={user.id} className="activity-item">
                    <div className="activity-icon">
                      <span>{user.username.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="activity-details">
                      <h4 className="activity-user">{user.username}</h4>
                      <p className="activity-action">{user.action} in {user.category}</p>
                    </div>
                    <div className="activity-time">
                      {formatDate(user.timestamp)}
                    </div>
                  </div>
                ))}
              </div>
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
                  placeholder="Search users, actions, or categories..."
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
                      <th>Action</th>
                      <th>Category</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUserData.map(user => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.action}</td>
                        <td>{user.category}</td>
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