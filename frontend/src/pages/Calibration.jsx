import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';

const Calibration = () => {
  const [calibrationState, setCalibrationState] = useState('start'); // start, calibrating, complete
  const [currentPoint, setCurrentPoint] = useState(1);
  const totalPoints = 9;

  // Mock calibration process
  useEffect(() => {
    let interval;
    if (calibrationState === 'calibrating') {
      interval = setInterval(() => {
        setCurrentPoint((prev) => {
          if (prev >= totalPoints) {
            setCalibrationState('complete');
            clearInterval(interval);
            return totalPoints;
          }
          return prev + 1;
        });
      }, 1500); // 1.5s per point for demo
    }
    return () => clearInterval(interval);
  }, [calibrationState]);

  const startCalibration = () => {
    setCalibrationState('calibrating');
    setCurrentPoint(1);
  };

  const resetCalibration = () => {
    setCalibrationState('start');
    setCurrentPoint(1);
  };

  // Calculate target position based on current point (1-9)
  const getTargetStyle = (point) => {
    const positions = {
      1: { top: '10%', left: '10%' },
      2: { top: '10%', left: '50%', transform: 'translate(-50%, 0)' },
      3: { top: '10%', right: '10%' },
      4: { top: '50%', left: '10%', transform: 'translate(0, -50%)' },
      5: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      6: { top: '50%', right: '10%', transform: 'translate(0, -50%)' },
      7: { bottom: '10%', left: '10%' },
      8: { bottom: '10%', left: '50%', transform: 'translate(-50%, 0)' },
      9: { bottom: '10%', right: '10%' },
    };
    return {
      position: 'absolute',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: 'var(--rgb-gradient)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
      ...positions[point]
    };
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header" style={{ marginBottom: '1rem' }}>
        <h1 className="page-title">Calibration</h1>
        {calibrationState === 'start' && <p className="subtitle">Calibrate EyeMouse for accurate cursor movement.</p>}
      </div>

      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: calibrationState === 'calibrating' ? 0 : '2rem', overflow: 'hidden', position: 'relative' }}>
        
        {calibrationState === 'start' && (
          <div style={{ margin: 'auto', maxWidth: '600px', textAlign: 'center' }}>
            <Target size={64} style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }} />
            <h2 style={{ marginBottom: '1.5rem' }}>Before starting:</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', background: 'var(--hover-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--success-color)' }}>✓</span> Sit approximately 50–70 cm from the camera</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--success-color)' }}>✓</span> Keep your face clearly visible</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--success-color)' }}>✓</span> Maintain comfortable lighting</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--success-color)' }}>✓</span> Look directly at the calibration points</div>
            </div>
            <button className="rgb-button" onClick={startCalibration} style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              START CALIBRATION
            </button>
          </div>
        )}

        {calibrationState === 'calibrating' && (
          <div style={{ width: '100%', height: '100%', background: '#ffffff', position: 'relative' }}>
            <div style={getTargetStyle(currentPoint)}>
              <div style={{ width: '10px', height: '10px', background: 'white', borderRadius: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>Look at the target</h3>
              <div style={{ background: 'var(--hover-bg)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'inline-block' }}>
                Calibration Point <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>{currentPoint} / {totalPoints}</span>
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                {Array.from({ length: totalPoints }).map((_, i) => (
                  <div key={i} style={{ 
                    width: '12px', height: '12px', borderRadius: '50%', 
                    background: i < currentPoint ? 'var(--text-color)' : 'var(--border-color)',
                    transition: 'background 0.3s'
                  }}></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {calibrationState === 'complete' && (
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <CheckCircle2 size={80} style={{ color: 'var(--success-color)', marginBottom: '1.5rem' }} />
            <h2 style={{ marginBottom: '2rem' }}>CALIBRATION COMPLETE</h2>
            
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <div style={{ background: 'var(--hover-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', minWidth: '200px' }}>
                <div style={{ color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Calibration Quality</div>
                <div style={{ color: 'var(--success-color)', fontWeight: 600, fontSize: '1.25rem' }}>Excellent</div>
              </div>
              <div style={{ background: 'var(--hover-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', minWidth: '200px' }}>
                <div style={{ color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Cursor Stability</div>
                <div style={{ color: 'var(--success-color)', fontWeight: 600, fontSize: '1.25rem' }}>Good</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="secondary-button" onClick={resetCalibration}>
                <RotateCcw size={20} /> Recalibrate
              </button>
              <button className="rgb-button" onClick={() => window.location.href='/dashboard'}>
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Calibration;
