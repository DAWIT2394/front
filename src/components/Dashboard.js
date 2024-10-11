import React, { useState, useEffect } from 'react';
import TotalLoadChart from './TotalLoadChart.js'; // Import the chart component

const Dashboard = () => {
  const [loadCounts, setLoadCounts] = useState({
    daily: 10,
    weekly: 70,
    monthly: 300,
    yearly: 3500,
  });

  // You can update loadCounts with real data fetched from an API or your state

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Load Overview</h2>
      
      {/* Chart Component */}
      <TotalLoadChart loadData={loadCounts} />
    </div>
  );
};

export default Dashboard;
