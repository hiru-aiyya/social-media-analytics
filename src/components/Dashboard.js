import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState({});

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/analytics')
      .then(response => {
        setAnalyticsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Social Media Analytics Dashboard</h1>
      <Bar
        data={analyticsData}
        options={{ responsive: true }}
      />
    </div>
  );
};

export default Dashboard;
