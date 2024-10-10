import React from 'react';
import ManageUsers from './ManageUsers';

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      
      <ManageUsers />
      {/* Other admin functionalities can be added here */}
    </div>
  );
};

export default AdminDashboard;
