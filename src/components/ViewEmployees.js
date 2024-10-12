import React, { useState } from 'react';

const ViewEmployee = () => {
  // Sample data for employees
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      address: '123 Main St, Cityville',
      email: 'alice.johnson@example.com',
      phone: '123-456-7890',
      teamLeader: 'Jane Smith',
      gender: 'Female',
    },
    {
      id: 2,
      name: 'Bob Williams',
      address: '456 Elm St, Townsville',
      email: 'bob.williams@example.com',
      phone: '987-654-3210',
      teamLeader: 'John Doe',
      gender: 'female',
    },
    {
        id: 2,
        name: 'Bob Williams',
        address: '456 Elm St, Townsville',
        email: 'bob.williams@example.com',
        phone: '987-654-3210',
        teamLeader: 'John Doe',
        gender: 'female',
      },
    {
      id: 3,
      name: 'Charlie Brown',
      address: '789 Oak St, Hamletville',
      email: 'charlie.brown@example.com',
      phone: '555-123-4567',
      teamLeader: 'Emily Johnson',
      gender: 'Male',
    },
    {
      id: 4,
      name: 'Diana Prince',
      address: '321 Pine St, Villagetown',
      email: 'diana.prince@example.com',
      phone: '444-987-6543',
      teamLeader: 'Michael Brown',
      gender: 'Female',
    },
    // Add more sample data here if needed
  ]);

  // State for search query and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 2; // Number of employees per page

  // Filter employees based on search query (name or email)
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Count total employees and gender distribution
  const totalEmployees = employees.length;
  const totalMale = employees.filter(employee => employee.gender === 'Male').length;
  const totalFemale = employees.filter(employee => employee.gender === 'Female').length;

  return (
    <div className="flex max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Main content area */}
      <div className="w-3/4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Employee Dashboard</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">ID</th>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Address</th>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Phone</th>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Team Leader</th>
                <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Gender</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.length > 0 ? (
                currentEmployees.map((employee) => (
                  <tr key={employee.id} className="border-t border-gray-200">
                    <td className="py-4 px-6 text-sm text-gray-600">{employee.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{employee.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{employee.address}</td>
                    <td className="py-4 px-6 text-sm text-blue-600">
                      <a href={`mailto:${employee.email}`} className="hover:underline">
                        {employee.email}
                      </a>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">{employee.phone}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{employee.teamLeader}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{employee.gender}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-4 px-6 text-center text-sm text-gray-600">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          <ul className="inline-flex space-x-2">
            {Array.from({ length: Math.ceil(filteredEmployees.length / employeesPerPage) }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 border border-gray-300 rounded-lg ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Summary Box */}
      <div className="w-1/4 pl-6">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Summary</h2>
          <div className="mb-2">
            <span className="font-semibold">Total Employees:</span> {totalEmployees}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Total Male:</span> {totalMale}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Total Female:</span> {totalFemale}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
