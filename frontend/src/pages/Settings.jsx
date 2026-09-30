import React from 'react';

const Settings = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="subtitle">Configure detection parameters and cursor behavior.</p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
        {/* Cursor Settings */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Cursor Settings</h3>
          
          <div className="flex-col gap-6">
            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Cursor Speed</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Normal</span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Slow</span>
                <input type="range" min="1" max="10" defaultValue="5" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Fast</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Sensitivity</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>High</span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Low</span>
                <input type="range" min="1" max="10" defaultValue="8" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>High</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Smoothing</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>High</span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Low</span>
                <input type="range" min="1" max="10" defaultValue="8" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>High</span>
              </div>
            </div>

            <div className="flex-col gap-3 mt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} />
                <span style={{ fontWeight: 500 }}>Enable 1-Euro Filter</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} />
                <span style={{ fontWeight: 500 }}>Enable Stillness Lock</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex-col gap-6">
          {/* Blink Settings */}
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Blink Detection</h3>
            
            <div className="flex-col gap-6">
              <div>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Sensitivity</label>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Medium</span>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Low</span>
                  <input type="range" min="1" max="10" defaultValue="5" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>High</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Blink Duration (ms)</label>
                <input type="number" defaultValue="300" style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '100px' }} />
              </div>

              <label className="flex items-center gap-3 cursor-pointer mt-2">
                <input type="checkbox" defaultChecked style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} />
                <span style={{ fontWeight: 500 }}>Enable Left Click on Blink</span>
              </label>
            </div>
          </div>

          {/* Mouth Settings */}
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Mouth Detection</h3>
            
            <div className="flex-col gap-6">
              <div>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Opening Threshold</label>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Medium</span>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Low</span>
                  <input type="range" min="1" max="10" defaultValue="6" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>High</span>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} />
                <span style={{ fontWeight: 500 }}>Enable Scroll Mode</span>
              </label>

              <div>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Scroll Speed</label>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Fast</span>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Slow</span>
                  <input type="range" min="1" max="10" defaultValue="8" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stillness Lock */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Stillness Lock</h3>
            <div className="system-status">
              <span className="status-dot status-active"></span>
              <span style={{ fontWeight: 600 }}>Enabled</span>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            Prevents small involuntary head movements from moving the cursor when you intend to stay still.
          </p>

          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Activation Threshold</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Low</span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Low</span>
                <input type="range" min="1" max="10" defaultValue="3" style={{ flex: 1, accentColor: 'var(--text-color)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>High</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Lock Duration (ms)</label>
              <input type="number" defaultValue="500" style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '100px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
