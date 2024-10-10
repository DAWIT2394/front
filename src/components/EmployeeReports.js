import React from 'react';

const reports = [
  { employeeId: 1, report: 'Completed project A' },
  { employeeId: 2, report: 'Working on design B' },
  { employeeId: 3, report: 'Managing team C' },
];

function EmployeeReports({ employee }) {
  const employeeReports = reports.filter(
    (report) => report.employeeId === employee.id
  );

  return (
    <div className="bg-green-50 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">Reports</h2>
      {employeeReports.length > 0 ? (
        <ul className="list-disc list-inside">
          {employeeReports.map((report, index) => (
            <li key={index}>{report.report}</li>
          ))}
        </ul>
      ) : (
        <p>No reports available for this employee.</p>
      )}
    </div>
  );
}

export default EmployeeReports;
