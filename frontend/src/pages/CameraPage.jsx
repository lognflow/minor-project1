import React from 'react';
import { Camera, User } from 'lucide-react';

const CameraPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Camera</h1>
        <p className="subtitle">Configure and monitor your camera feed for optimal tracking.</p>
      </div>

      <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
        <div className="card" style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            flex: 1, 
            backgroundColor: '#e2e8f0', 
            borderRadius: 'var(--radius-md)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            minHeight: '400px'
          }}>
            <User size={80} color="#94a3b8" />
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.875rem' }}>
              LIVE PREVIEW
            </div>
          </div>
        </div>

        <div className="flex-col gap-6">
          <div className="card">
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Camera Settings</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Camera Device</label>
              <select style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }}>
                <option>Integrated Webcam</option>
                <option>External USB Camera</option>
              </select>
            </div>

            <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Camera Status</span>
              <div className="system-status">
                <span className="status-dot status-active"></span>
                <span>Connected</span>
              </div>
            </div>

            <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>FPS</span>
              <span style={{ fontWeight: 600 }}>30</span>
            </div>

            <div className="flex justify-between items-center">
              <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Resolution</span>
              <span style={{ fontWeight: 600 }}>1280 × 720</span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Detection Toggles</h3>
            
            <div className="flex-col gap-4">
              {[
                'Face Detection',
                'Eye Tracking',
                'Blink Detection',
                'Mouth Detection',
                'Facial Landmarks'
              ].map((label, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span style={{ fontSize: '0.875rem' }}>{label}</span>
                  <input type="checkbox" defaultChecked style={{ width: '1rem', height: '1rem', accentColor: 'var(--success-color)' }} />
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Camera Quality</h3>
            
            <div className="flex-col gap-4">
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Lighting</span>
                <span style={{ color: 'var(--success-color)', fontWeight: 600 }}>Good</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Face Visibility</span>
                <span style={{ color: 'var(--success-color)', fontWeight: 600 }}>Good</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Camera Quality</span>
                <span style={{ color: 'var(--success-color)', fontWeight: 600 }}>Good</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
