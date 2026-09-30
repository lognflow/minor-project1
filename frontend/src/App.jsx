import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CameraPage from './pages/CameraPage';
import Settings from './pages/Settings';
import Monitoring from './pages/Monitoring';
import Help from './pages/Help';
import Welcome from './pages/Welcome';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/*" element={
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Header />
              <div className="page-content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/camera" element={<CameraPage />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/monitoring" element={<Monitoring />} />
                  <Route path="/help" element={<Help />} />
                </Routes>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
