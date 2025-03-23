import React, { useEffect } from 'react';
import "./Dashboard.css"; // or the correct path
import './style.css';
import './index.css';


function Dashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f6f9"; // Light gray background
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
