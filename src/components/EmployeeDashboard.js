import React from 'react';

const EmployeeDashboard = ({ employee }) => {
  // Check if employee is defined before trying to access its properties
  if (!employee) {
    return <p>No employee selected.</p>;
  }

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Employee Profile</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <p><strong>Email:</strong> {employee.name.toLowerCase()}@company.com</p>
    </div>
  );
}

export default EmployeeDashboard;
