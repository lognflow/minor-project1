import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, User, Video } from 'lucide-react';

const Dashboard = () => {
  const [isControlling, setIsControlling] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
      });

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setStreamActive(false);
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Eye-Controlled Mouse</h1>
        <p className="subtitle">Control your computer using head movement, blinking and mouth gestures.</p>
      </div>

      <div className="dashboard-grid">
        {/* Main Camera Card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0 }}>LIVE CAMERA</h3>
            <div className="system-status">
              <span className="status-dot status-active"></span>
              <span className="rgb-text" style={{ fontWeight: 600 }}>TRACKING ACTIVE</span>
            </div>
          </div>

          <div style={{ 
            flex: 1, 
            backgroundColor: '#e2e8f0', 
            borderRadius: 'var(--radius-md)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            minHeight: '300px',
            overflow: 'hidden'
          }}>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: streamActive ? 'block' : 'none',
                transform: 'scaleX(-1)'
              }}
            />
            {!streamActive && <User size={64} color="#94a3b8" />}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Face Detected <span style={{ color: 'var(--success-color)' }}>✓</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Eyes Detected <span style={{ color: 'var(--success-color)' }}>✓</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Mouth Detected <span style={{ color: 'var(--success-color)' }}>✓</span>
              </div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>
              FPS: 30 | Latency: 42 ms
            </div>
          </div>
        </div>

        {/* System Status Card */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>System Status</h3>
          <div className="flex-col gap-4">
            {[
              { label: 'Camera', status: 'Connected', active: true },
              { label: 'Face Detection', status: 'Active', active: true },
              { label: 'Eye Tracking', status: 'Active', active: true },
              { label: 'Head Tracking', status: 'Active', active: true },
              { label: 'Blink Detection', status: 'Active', active: true },
              { label: 'Mouth Detection', status: 'Active', active: true },
              { label: 'Mouse Control', status: isControlling ? 'Active' : 'Inactive', active: isControlling }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center" style={{ paddingBottom: '0.75rem', borderBottom: index < 6 ? '1px solid var(--border-color)' : 'none' }}>
                <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>{item.label}</span>
                <div className="system-status">
                  <span className={`status-dot ${item.active ? 'status-active' : 'status-inactive'}`}></span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="card">
          <div className="flex justify-between items-center mb-4" style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Cursor Position</h4>
          </div>
          <div className="flex justify-between">
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>X</div>
              <div style={{ fontSize: '2rem', fontWeight: 600 }}>642</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Y</div>
              <div style={{ fontSize: '2rem', fontWeight: 600 }}>381</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Blink</h4>
            <div className="system-status">
              <span className="status-dot status-active"></span>
              <span style={{ fontSize: '0.75rem' }}>READY</span>
            </div>
          </div>
          <p style={{ fontWeight: 500 }}>Intentional blink detected</p>
        </div>

        <div className="card">
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Mouth</h4>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>CLOSED</div>
          <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Scroll mode inactive</p>
        </div>

        <div className="card">
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Head Tracking</h4>
            <div className="system-status">
              <span className="status-dot status-active"></span>
              <span style={{ fontSize: '0.75rem' }}>ACTIVE</span>
            </div>
          </div>
          <p style={{ fontWeight: 500 }}>Movement detected</p>
        </div>
      </div>

      <div className="controls-row">
        {!isControlling ? (
          <button className="rgb-button" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={() => setIsControlling(true)}>
            <Play size={24} /> START MOUSE CONTROL
          </button>
        ) : (
          <button className="secondary-button" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={() => setIsControlling(false)}>
            <Pause size={24} /> PAUSE CONTROL
          </button>
        )}
        <button className="danger-button" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={() => { setIsControlling(false); stopCamera(); }}>
          <Square size={24} /> EMERGENCY STOP
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
