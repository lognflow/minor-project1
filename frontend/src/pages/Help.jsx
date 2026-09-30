import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const Help = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">How to Use EyeBase</h1>
        <p className="subtitle">Learn how to set up and control the application.</p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        <div className="flex-col gap-6">
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: 'var(--rgb-gradient)', width: '24px', height: '24px', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>i</div>
              Getting Started Steps
            </h3>
            
            <div className="flex-col gap-4">
              {[
                'Connect your webcam and ensure good lighting.',
                'Go to the Camera page and check your feed.',
                'Complete the Calibration process.',
                'Navigate to Dashboard or Mouse Control.',
                'Click "START MOUSE CONTROL".',
                'Move your head to move the cursor.',
                'Blink intentionally to click.',
                'Open your mouth to activate scroll mode.'
              ].map((step, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold', flexShrink: 0 }}>
                    {index + 1}
                  </div>
                  <span style={{ lineHeight: '1.5', paddingTop: '2px' }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ border: '1px solid #fca5a5', background: '#fef2f2' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--error-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={20} />
              Emergency Stop
            </h3>
            <p style={{ color: '#991b1b' }}>
              Press <strong>ESC</strong> on your keyboard at any time to instantly stop mouse control and return to normal operation.
            </p>
          </div>
        </div>

        <div className="flex-col gap-6">
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={20} />
              Frequently Asked Questions
            </h3>
            
            <div className="flex-col gap-6">
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Why is cursor movement unstable?</h4>
                <div style={{ background: 'var(--hover-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>
                    Check your lighting to ensure your face is clearly visible. You can also adjust the <strong>Smoothing</strong> setting and enable the <strong>1-Euro Filter</strong> in Settings.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Why isn't my face detected?</h4>
                <div style={{ background: 'var(--hover-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>
                    Move closer to the camera (recommended 50-70cm). Make sure you don't have strong backlight behind you and that your camera lens is clean.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Why isn't blink detection working?</h4>
                <div style={{ background: 'var(--hover-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>
                    An intentional blink must be slightly longer than a natural blink. You can adjust the <strong>Blink Sensitivity</strong> and <strong>Blink Duration</strong> in the Settings page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
