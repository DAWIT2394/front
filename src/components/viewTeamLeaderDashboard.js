import React, { useState } from 'react';

const ViewTeamLeaderDashboard = () => {
  // Sample data for team leaders
  const [teamLeaders, setTeamLeaders] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      address: '123 Maple Street, Cityville',
      email: 'jane.smith@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'John Doe',
      address: '456 Oak Avenue, Townsville',
      email: 'john.doe@example.com',
      phone: '987-654-3210',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      address: '789 Pine Road, Hamletville',
      email: 'emily.johnson@example.com',
      phone: '555-123-4567',
    },
    {
      id: 4,
      name: 'Michael Brown',
      address: '321 Cedar Lane, Villagetown',
      email: 'michael.brown@example.com',
      phone: '444-987-6543',
    },
    {
        id: 5,
        name: 'Michael Brown',
        address: '321 Cedar Lane, Villagetown',
        email: 'michael.brown@example.com',
        phone: '444-987-6543',
      },
      {     id: 6,
        name: 'Michael Brown',
        address: '321 Cedar Lane, Villagetown',
        email: 'michael.brown@example.com',
        phone: '444-987-6543',
      },
    // Add more sample data here if needed
  ]);

  // State for search query and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const leadersPerPage = 2; // Number of team leaders per page

  // Filter team leaders based on search query (name or email)
  const filteredLeaders = teamLeaders.filter(
    (leader) =>
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastLeader = currentPage * leadersPerPage;
  const indexOfFirstLeader = indexOfLastLeader - leadersPerPage;
  const currentLeaders = filteredLeaders.slice(indexOfFirstLeader, indexOfLastLeader);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Team Leader Dashboard</h1>

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
            </tr>
          </thead>
          <tbody>
            {currentLeaders.length > 0 ? (
              currentLeaders.map((leader) => (
                <tr key={leader.id} className="border-t border-gray-200">
                  <td className="py-4 px-6 text-sm text-gray-600">{leader.id}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{leader.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{leader.address}</td>
                  <td className="py-4 px-6 text-sm text-blue-600">
                    <a href={`mailto:${leader.email}`} className="hover:underline">
                      {leader.email}
                    </a>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{leader.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-6 text-center text-sm text-gray-600">
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
          {Array.from({ length: Math.ceil(filteredLeaders.length / leadersPerPage) }).map((_, index) => (
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
  );
};

export default ViewTeamLeaderDashboard;
