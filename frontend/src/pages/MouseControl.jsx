import React, { useState } from 'react';
import { Play, Pause, Square, ArrowRight, MousePointer2 } from 'lucide-react';

const MouseControl = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Mouse Control</h1>
        <p className="subtitle">Control your cursor using natural head and facial movements.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="system-status" style={{ background: isActive ? 'var(--hover-bg)' : 'transparent', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)' }}>
            <span className={`status-dot ${isActive ? 'status-active' : 'status-inactive'}`}></span>
            <span style={{ fontWeight: 600 }}>{isActive ? 'MOUSE CONTROL ACTIVE' : 'MOUSE CONTROL INACTIVE'}</span>
          </div>
        </div>

        <div className="grid grid-cols-3" style={{ gap: '2rem', marginTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem' }}>👤</span>
            </div>
            <h3 style={{ margin: 0 }}>Head Movement</h3>
            <ArrowRight color="var(--text-light)" />
            <div className="rgb-border" style={{ padding: '1rem', width: '100%' }}>
              <span style={{ fontWeight: 600 }}>Cursor Movement</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem' }}>👁️</span>
            </div>
            <h3 style={{ margin: 0 }}>Intentional Blink</h3>
            <ArrowRight color="var(--text-light)" />
            <div className="rgb-border" style={{ padding: '1rem', width: '100%' }}>
              <span style={{ fontWeight: 600 }}>Left Click</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem' }}>👄</span>
            </div>
            <h3 style={{ margin: 0 }}>Mouth Opening</h3>
            <ArrowRight color="var(--text-light)" />
            <div className="rgb-border" style={{ padding: '1rem', width: '100%' }}>
              <span style={{ fontWeight: 600 }}>Scroll Mode</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '1.5rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', display: 'inline-block', minWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <MousePointer2 color="var(--text-light)" />
            <span style={{ fontWeight: 600, color: 'var(--text-light)' }}>Current Cursor Position</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '1.5rem', fontWeight: 700 }}>
            <span>X: 642</span>
            <span>Y: 381</span>
          </div>
        </div>
      </div>

      <div className="controls-row">
        {!isActive ? (
          <button className="rgb-button" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={() => setIsActive(true)}>
            <Play size={24} /> Start
          </button>
        ) : (
          <button className="secondary-button" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={() => setIsActive(false)}>
            <Pause size={24} /> Pause
          </button>
        )}
        <button className="danger-button" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={() => setIsActive(false)}>
          <Square size={24} /> Emergency Stop
        </button>
      </div>
    </div>
  );
};

export default MouseControl;
