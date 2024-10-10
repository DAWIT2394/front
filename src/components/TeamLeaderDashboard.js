import React, { useState } from 'react';
import EmployeeProfile from './EmployeeDashboard';
import EmployeeReports from './EmployeeReports';

const employees = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Project Manager' },
];

function TeamLeaderDashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Team TeamLeaderDashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedEmployee(employee)}
          >
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-gray-600">{employee.role}</p>
          </div>
        ))}
      </div>

      {selectedEmployee && (
        <div className="mt-6">
          <EmployeeProfile employee={selectedEmployee} />
          <EmployeeReports employee={selectedEmployee} />
        </div>
      )}
    </div>
  );
}

export default TeamLeaderDashboard;
