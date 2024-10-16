import React from 'react';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl">Manage Users</h3>

<Link to="/TeamLeaderForm">
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Team Leader</button>
</Link>
<Link to="/TeamLeaderForm">
<button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">Add Employee</button>

</Link>
<Link to="/ViewReport">
<button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">view Report</button>

</Link>
<Link to="/ViewEmployees">
<button className="bg-green-500 text-white px-4 py-2 rounded ml-2">view Employee</button>

</Link>
<Link to="/ViewTeamLeaderDashboard">
<button className="bg-green-500 text-white px-4 py-2 rounded ml-2">view Team Leader</button>

</Link>
      {/* List of users and functionalities to edit/delete users can go here */}
    </div>
  );
};

export default ManageUsers;
