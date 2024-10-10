import React from 'react';

const UserProfile = () => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl">Your Profile</h3>
      {/* Display user's personal details and submitted reports */}
      <div className="bg-white p-4 rounded shadow-md">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        {/* List of submitted reports can be displayed here */}
      </div>
    </div>
  );
};

export default UserProfile;
