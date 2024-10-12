import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import TeamLeaderDashboard from './components/TeamLeaderDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import TeamLeaderForm from './components/TeamLeaderForm';
import ManageUsers from './components/ManageUsers';
import ViewReport from './components/ViewReport';
import Dashboard from './components/Dashboard';
import ViewTeamLeaderDashboard from './components/viewTeamLeaderDashboard';
import ViewEmployees from './components/ViewEmployees';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Navbar />
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/team-leader" element={<TeamLeaderDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/authform" element={<AuthForm />} />
          <Route path="/teamleaderform" element={<TeamLeaderForm />} />
          <Route path="/ManageUsers" element={<AdminDashboard />} />
          <Route path="/authForm" element={<TeamLeaderDashboard />} />
          <Route path="/viewReport" element={<ViewReport />} />
          <Route path="/Dashboard/" element={<Dashboard />} />
          <Route path="/ViewTeamLeaderDashboard/" element={<ViewTeamLeaderDashboard />} />
          <Route path="/ViewEmployees/" element={<ViewEmployees />} />








          <Route path="/" element={<Home/>  } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
