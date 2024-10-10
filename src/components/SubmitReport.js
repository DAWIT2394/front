import React from 'react';

const SubmitReport = () => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl">Submit Report</h3>
      <form className="bg-white p-4 rounded shadow-md">
        <input type="text" placeholder="Title" className="border p-2 w-full mb-2" />
        <textarea placeholder="Description" className="border p-2 w-full mb-2" />
        <input type="date" className="border p-2 w-full mb-2" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default SubmitReport;
