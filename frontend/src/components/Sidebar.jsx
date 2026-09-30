import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Camera, 
  Settings, 
  Activity, 
  HelpCircle,
  Eye
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo rgb-text">
          <Eye size={32} />
        </div>
        <div className="sidebar-title-container">
          <h2 className="sidebar-title">EyeMouse</h2>
          <span className="sidebar-subtitle">Hands-Free Control</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/camera" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Camera size={20} />
          <span>Camera</span>
        </NavLink>

        <NavLink to="/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <NavLink to="/monitoring" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Activity size={20} />
          <span>Monitoring</span>
        </NavLink>
        <NavLink to="/help" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <HelpCircle size={20} />
          <span>Help</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <div className="system-status">
          <span className="status-dot status-active"></span>
          <span>System Connected</span>
        </div>
        <div className="app-version">
          EyeMouse v1.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
