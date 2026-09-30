import React from 'react';
import { Settings, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">EyeMouse</h1>
        <span style={{ color: 'var(--text-light)', fontSize: '0.875rem', display: 'none' }}>Hands-Free Computer Control</span>
      </div>
      
      <div className="header-right">
        <div className="header-status">
          <span className="status-dot status-active"></span>
          <span>System Ready</span>
        </div>
        <Link to="/settings" className="header-action">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
