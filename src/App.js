import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import TeamLeaderDashboard from './components/TeamLeaderDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  return (
    <Routes>
      <div className="min-h-screen bg-gray-100 p-4">
        <Route>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/team-leader" component={TeamLeaderDashboard} />
          <Route path="/employee" component={EmployeeDashboard} />
          <Route path="/" exact>
            <h1 className="text-4xl text-center">Welcome to the Team Leader Management System</h1>
          </Route>
        </Route>
      </div>
    </Routes>
  );
}

export default App;
