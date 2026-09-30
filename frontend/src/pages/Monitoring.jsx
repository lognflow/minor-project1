import React from 'react';

const Monitoring = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Monitoring</h1>
        <p className="subtitle">Real-time system performance and detection metrics.</p>
      </div>

      <div className="metrics-grid">
        <div className="card">
          <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>FPS</div>
          <div style={{ fontSize: '2rem', fontWeight: 600 }}>30</div>
        </div>
        <div className="card">
          <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>LATENCY</div>
          <div style={{ fontSize: '2rem', fontWeight: 600 }}>42 <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>ms</span></div>
        </div>
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>TRACKING</div>
          <div className="system-status" style={{ marginTop: '0.5rem' }}>
            <span className="status-dot status-active" style={{ width: '16px', height: '16px' }}></span>
            <span className="rgb-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Detection Status</h3>
          <div className="flex-col gap-4" style={{ fontFamily: 'monospace', fontSize: '1rem' }}>
            <div className="flex justify-between">
              <span>Face Detection</span>
              <span style={{ color: 'var(--success-color)' }}>██████████</span>
            </div>
            <div className="flex justify-between">
              <span>Eye Detection</span>
              <span style={{ color: 'var(--success-color)' }}>██████████</span>
            </div>
            <div className="flex justify-between">
              <span>Blink Detection</span>
              <span style={{ color: 'var(--warning-color)' }}>████████░░</span>
            </div>
            <div className="flex justify-between">
              <span>Mouth Detection</span>
              <span style={{ color: 'var(--success-color)' }}>█████████░</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>System States</h3>
          <div className="flex-col gap-4">
            <div className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ fontWeight: 500 }}>Tracking State</span>
              <div className="system-status">
                <span className="status-dot status-active"></span>
                <span>Stable</span>
              </div>
            </div>
            <div className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ fontWeight: 500 }}>Cursor Movement</span>
              <div className="system-status">
                <span className="status-dot status-active"></span>
                <span>Active</span>
              </div>
            </div>
            <div className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ fontWeight: 500 }}>Blink State</span>
              <div className="system-status">
                <span className="status-dot status-active"></span>
                <span>Ready</span>
              </div>
            </div>
            <div className="flex justify-between items-center" style={{ padding: '0.5rem 0' }}>
              <span style={{ fontWeight: 500 }}>Scroll Mode</span>
              <div className="system-status">
                <span className="status-dot status-inactive"></span>
                <span style={{ color: 'var(--text-light)' }}>Inactive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ gridColumn: 'span 2' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Cursor Movement (Real-time)</h3>
          <div style={{ height: '200px', width: '100%', background: '#f8fafc', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Simple mock chart visualization */}
            <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
              <path d="M0,100 C100,120 200,80 300,100 C400,120 500,50 600,100 C700,150 800,90 800,90" fill="none" stroke="#e2e8f0" strokeWidth="2" />
              <path d="M0,100 C50,90 100,110 150,100 C200,90 250,120 300,100 C350,80 400,90 450,100 C500,110 550,80 600,100 C650,120 700,90 750,100" fill="none" stroke="var(--success-color)" strokeWidth="3" />
            </svg>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '1rem', fontSize: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--success-color)', borderRadius: '50%' }}></div>
                X Axis
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', background: '#e2e8f0', borderRadius: '50%' }}></div>
                Y Axis
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
