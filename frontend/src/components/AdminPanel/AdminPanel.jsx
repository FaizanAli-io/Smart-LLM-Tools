import "./AdminPanel.css";
import { useState, useEffect } from "react";
import { getAllActivities } from "../../api/activity";
import { listUsers, updateRole } from "../../api/auth";
import { categories } from "../../assets/categories";

export default function AdminPanel() {
  const [userData, setUserData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [roleUpdates, setRoleUpdates] = useState({});
  const [categoryUpdates, setCategoryUpdates] = useState({});

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

        if (data?.length) {
          const uniqueUserIds = [...new Set(data.map((item) => item.user?.id))].filter(Boolean);

          const oneDayAgo = new Date();
          oneDayAgo.setDate(oneDayAgo.getDate() - 1);

          const recentUserIds = [
            ...new Set(
              data
                .filter((item) => new Date(item.loggedAt) > oneDayAgo)
                .map((item) => item.user?.id)
            )
          ].filter(Boolean);

          setStats({
            totalUsers: uniqueUserIds.length,
            activeUsers: recentUserIds.length,
            totalPrompts: data.length,
            avgSessionTime: 10.5
          });
        }
      } catch (err) {
        console.error("Error fetching activity data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const users = await listUsers();
        const nonAdmins = users.filter((user) => user.role !== "admin");
        setUserList(nonAdmins);

        // Initialize category updates with current user categories
        const initialCategoryUpdates = {};
        nonAdmins.forEach(user => {
          initialCategoryUpdates[user.id] = user.allowedCategories || [];
        });
        setCategoryUpdates(initialCategoryUpdates);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchActivities();
    fetchUsers();
  }, []);

  const handleRoleChange = (userId, newRole) => {
    setRoleUpdates((prev) => ({
      ...prev,
      [userId]: newRole
    }));
  };

  const handleCategoryChange = (userId, categoryName, isChecked) => {
    setCategoryUpdates((prev) => {
      const currentCategories = prev[userId] || [];
      let updatedCategories;

      if (isChecked) {
        updatedCategories = [...currentCategories, categoryName];
      } else {
        updatedCategories = currentCategories.filter(cat => cat !== categoryName);
      }

      return {
        ...prev,
        [userId]: updatedCategories
      };
    });
  };

  const handleUpdateRole = async (userId) => {
    const newRole = roleUpdates[userId];
    if (!newRole) return;

    try {
      await updateRole({ userId, role: newRole });
      alert("Role updated successfully.");

      const updatedUsers = await listUsers();
      const nonAdmins = updatedUsers.filter((user) => user.role !== "admin");
      setUserList(nonAdmins);

      // Remove from roleUpdates after successful update
      setRoleUpdates(prev => {
        const updated = { ...prev };
        delete updated[userId];
        return updated;
      });
    } catch (error) {
      console.error("Error updating role:", error);
      alert("Failed to update role.");
    }
  };

  const handleUpdateCategories = async (userId) => {
    const selectedCategories = categoryUpdates[userId];
    if (!selectedCategories) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      console.log("Sending PATCH to:", `http://localhost:3000/api/admin/${userId}/categories`);
      console.log("Payload:", { allowedCategories: selectedCategories });
      console.log("Token:", token);

      const res = await fetch(`http://localhost:3000/api/admin/${userId}/categories`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ allowedCategories: selectedCategories })
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server responded with error:", errorText);
        throw new Error("Failed to update");
      }

      alert("Categories updated successfully");

      const updatedUsers = await listUsers();
      const nonAdmins = updatedUsers.filter((user) => user.role !== "admin");
      setUserList(nonAdmins);
    } catch (err) {
      console.error("Error updating categories:", err);
      alert("Failed to update categories");
    }

    console.log("Sent update for user:", userId, "with categories:", selectedCategories);
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleString();

  const formattedUserData = [...userData].reverse().map((activity, index) => ({
    id: activity.id || index,
    username: activity.user?.name || "Unknown User",
    timestamp: activity.loggedAt || new Date().toISOString(),
    prompt: activity.prompt || ""
  }));

  const filteredUserData = formattedUserData.filter(
    (entry) =>
      entry.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-panel-section">
      {/* Header */}
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

      {/* Content */}
      <div className="admin-content">
        {/* Tabs */}
        <div className="admin-tabs">
          {["dashboard", "activities", "users"].map((tab) => (
            <button
              key={tab}
              className={`admin-tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <div className="tab-icon">{tab.charAt(0).toUpperCase()}</div>
              {tab === "dashboard"
                ? "Dashboard"
                : tab === "activities"
                  ? "User Activities"
                  : "Manage Users"}
            </button>
          ))}
        </div>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="dashboard-content">
            <div className="stats-grid">
              {[
                { title: "Total Users", value: stats.totalUsers, icon: "U" },
                { title: "Active Users", value: stats.activeUsers, icon: "A" },
                { title: "Total Prompts", value: stats.totalPrompts, icon: "P" },
                { title: "Avg. Session (min)", value: stats.avgSessionTime, icon: "T" }
              ].map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon">
                    <span>{stat.icon}</span>
                  </div>
                  <div className="stat-info">
                    <h3>{stat.title}</h3>
                    <p className="stat-value">{stat.value}</p>
                  </div>
                </div>
              ))}
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
                      <div className="activity-time">{formatDate(user.timestamp)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Activities */}
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
                  <span role="img" aria-label="Search">
                    🔍
                  </span>
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
                    {filteredUserData.map((entry) => (
                      <tr key={entry.id}>
                        <td>{entry.username}</td>
                        <td className="prompt-cell">{entry.prompt}</td>
                        <td>{formatDate(entry.timestamp)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Manage Users */}
        {activeTab === "users" && (
          <div className="manage-users-content">
            <h2 className="section-title">Manage Users</h2>
            {userList.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">👥</div>
                <p>No non-admin users found.</p>
              </div>
            ) : (
              <div className="users-table-container">
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Email</th>
                      <th>Current Role</th>
                      <th>Update Role</th>
                      <th>Role Action</th>
                      <th>Categories</th>
                      <th>Category Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...userList]
                      .sort((a, b) => {
                        const rolePriority = {
                          ADMIN: 0,
                          PREMIUM: 1,
                          STANDARD: 2,
                          FREE: 3,
                          BLACKLIST: 4
                        };
                        return rolePriority[a.role] - rolePriority[b.role];
                      })
                      .map((user) => (
                        <tr key={user.id}>
                          <td className="user-name-cell">
                            <div className="user-avatar">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            {user.name}
                          </td>
                          <td className="email-cell">{user.email}</td>
                          <td>
                            <span className={`role-badge ${user.role.toLowerCase()}`}>
                              {user.role}
                            </span>
                          </td>
                          <td>
                            <select
                              className="role-select"
                              value={roleUpdates[user.id] || user.role}
                              onChange={(e) => handleRoleChange(user.id, e.target.value)}
                              disabled={user.role === "ADMIN"}
                            >
                              <option value="FREE">Free</option>
                              <option value="STANDARD">Standard</option>
                              <option value="PREMIUM">Premium</option>
                              <option value="BLACKLIST">Blacklist</option>
                            </select>
                          </td>
                          <td>
                            <button
                              className="action-button update-button"
                              onClick={() => handleUpdateRole(user.id)}
                              disabled={user.role === "ADMIN" || !roleUpdates[user.id]}
                            >
                              Update Role
                            </button>
                          </td>
                          <td className="categories-cell">
                            <div className="categories-grid">
                              {categories.map((cat) => (
                                <label key={cat.id} className="category-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={(categoryUpdates[user.id] || []).includes(cat.name)}
                                    onChange={(e) =>
                                      handleCategoryChange(user.id, cat.name, e.target.checked)
                                    }
                                  />
                                  <span className="checkbox-label">{cat.name}</span>
                                </label>
                              ))}
                            </div>
                          </td>
                          <td>
                            <button
                              className="action-button category-button"
                              onClick={() => handleUpdateCategories(user.id)}
                            >
                              Update Categories
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}