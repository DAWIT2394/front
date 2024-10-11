import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewReport = () => {
  const [reportData, setReportData] = useState({
    reportedBy: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    teamLeaderName: 'Jane Smith',
    files: [
      { type: 'pdf', name: 'Report.pdf', url: '/path/to/report.pdf' },
      { type: 'image', name: 'Screenshot.png', url: '/path/to/screenshot.png' },
      { type: 'doc', name: 'Document.docx', url: '/path/to/document.docx' },
    ],
  });

  const bookedLoads = [
    { id: 1, date: new Date('2024-10-01') },
    { id: 2, date: new Date('2024-09-28') },
    { id: 3, date: new Date('2024-10-02') },
    { id: 4, date: new Date('2024-08-15') },
    { id: 5, date: new Date('2024-01-10') },
    { id: 6, date: new Date('2023-12-25') },
  ];

  const [loadCounts, setLoadCounts] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });

  useEffect(() => {
    const today = new Date();

    const dailyCount = bookedLoads.filter(
      (load) => load.date.toDateString() === today.toDateString()
    ).length;

    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const weeklyCount = bookedLoads.filter(
      (load) => load.date >= startOfWeek && load.date <= new Date()
    ).length;

    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthlyCount = bookedLoads.filter(
      (load) => load.date >= startOfMonth && load.date <= new Date()
    ).length;

    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const yearlyCount = bookedLoads.filter(
      (load) => load.date >= startOfYear && load.date <= new Date()
    ).length;

    setLoadCounts({
      daily: dailyCount,
      weekly: weeklyCount,
      monthly: monthlyCount,
      yearly: yearlyCount,
    });
  }, [bookedLoads]);

  const renderFileLink = (file) => {
    if (file.type === 'pdf') {
      return (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View PDF
        </a>
      );
    } else if (file.type === 'image') {
      return (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Image
        </a>
      );
    } else if (file.type === 'doc') {
      return (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Document
        </a>
      );
    }
  };

  return (
    <div className="flex pt-20">  {/* Tailwind has pt-5 which gives 20px padding */}

      {/* Left sidebar for button */}
      <div className="w-1/5 bg-gray-100 p-4">

<Link to="/dashboard">
  <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full mb-4">
    Total Load Boooked
  </button>
</Link>

      </div>

      {/* Main content area */}
      <div className="w-4/5 max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Report Details</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Reported By:</label>
          <p className="text-gray-600">{reportData.reportedBy}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Email:</label>
          <p className="text-gray-600">{reportData.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Phone Number:</label>
          <p className="text-gray-600">{reportData.phoneNumber}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Team Leader Name:</label>
          <p className="text-gray-600">{reportData.teamLeaderName}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Total Booked Loads:</label>
          <p className="text-gray-600">Daily: {loadCounts.daily}</p>
          <p className="text-gray-600">Weekly: {loadCounts.weekly}</p>
          <p className="text-gray-600">Monthly: {loadCounts.monthly}</p>
          <p className="text-gray-600">Yearly: {loadCounts.yearly}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Attached Files:</label>
          <ul className="list-disc ml-6">
            {reportData.files.map((file, index) => (
              <li key={index}>
                <span>{file.name} - </span>
                {renderFileLink(file)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
