import React, { useState } from 'react';
import { Save, RotateCcw, Check, Sparkles } from 'lucide-react';
import { useEyeMouse } from '../context/EyeMouseContext';

const Settings = () => {
  const { settings, updateSettings } = useEyeMouse();
  const [localSettings, setLocalSettings] = useState({ ...settings });
  const [savedFeedback, setSavedFeedback] = useState(false);

  // Sync when settings change from backend
  React.useEffect(() => {
    setLocalSettings((prev) => ({ ...prev, ...settings }));
  }, [settings]);

  const handleChange = (key, value) => {
    setLocalSettings((prev) => ({ ...prev, [key]: value }));
    // Update live to backend
    updateSettings({ [key]: value });
  };

  const handleSave = () => {
    updateSettings(localSettings);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const handleReset = () => {
    const defaults = {
      cursorSpeed: 1.0,
      sensitivity: 8,
      smoothing: 8,
      oneEuroFilterEnabled: true,
      stillnessLockEnabled: true,
      blinkEarThreshold: 0.165,
      blinkHoldSeconds: 0.55,
      clickCooldown: 1.0,
      leftClickOnBlink: true,
      mouthOpenThreshold: 0.55,
      modeToggleHoldSeconds: 0.2,
      scrollModeEnabled: true,
      scrollSensitivity: 15,
      stillnessEnterRadius: 4.0,
      stillnessExitRadius: 8.0,
      stillnessHoldTime: 0.2,
    };
    setLocalSettings(defaults);
    updateSettings(defaults);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Settings & Tuning</h1>
          <p className="subtitle">Fine-tune detection thresholds, cursor smoothing, and gesture response times.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="secondary-button" onClick={handleReset} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem' }}>
            <RotateCcw size={16} /> Reset Defaults
          </button>
          <button className="rgb-button" onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.5rem' }}>
            {savedFeedback ? <Check size={16} /> : <Save size={16} />}
            {savedFeedback ? 'Saved!' : 'Save Settings'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
        {/* Cursor Settings */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Cursor Motion & Filtering</h3>
          
          <div className="flex-col gap-6">
            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Cursor Speed Multiplier</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                  {localSettings.cursorSpeed}x
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>0.5x</span>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.5" 
                  step="0.1" 
                  value={localSettings.cursorSpeed || 1.0} 
                  onChange={(e) => handleChange('cursorSpeed', parseFloat(e.target.value))}
                  style={{ flex: 1, accentColor: 'var(--primary-color)' }} 
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>2.5x</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Head Tracking Sensitivity</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                  Level {localSettings.sensitivity || 8}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Low</span>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={localSettings.sensitivity || 8} 
                  onChange={(e) => handleChange('sensitivity', parseInt(e.target.value))}
                  style={{ flex: 1, accentColor: 'var(--primary-color)' }} 
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>High</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>One-Euro Smoothing Factor</label>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                  Level {localSettings.smoothing || 8}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Crisp (Raw)</span>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={localSettings.smoothing || 8} 
                  onChange={(e) => handleChange('smoothing', parseInt(e.target.value))}
                  style={{ flex: 1, accentColor: 'var(--primary-color)' }} 
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Smooth</span>
              </div>
            </div>

            <div className="flex-col gap-3 mt-2" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={localSettings.oneEuroFilterEnabled ?? true} 
                  onChange={(e) => handleChange('oneEuroFilterEnabled', e.target.checked)}
                  style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} 
                />
                <span style={{ fontWeight: 600 }}>Enable 1-Euro Adaptive Jitter Filter</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={localSettings.stillnessLockEnabled ?? true} 
                  onChange={(e) => handleChange('stillnessLockEnabled', e.target.checked)}
                  style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} 
                />
                <span style={{ fontWeight: 600 }}>Enable Stillness Lock (Freezes cursor on steady head)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Gestures Column */}
        <div className="flex-col gap-6">
          {/* Blink Settings */}
          <div className="card">
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.125rem' }}>Blink Click Detection</h3>
            
            <div className="flex-col gap-5">
              <div>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Blink Threshold (EAR)</label>
                  <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                    {localSettings.blinkEarThreshold || 0.165}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>0.10 (Tight)</span>
                  <input 
                    type="range" 
                    min="0.10" 
                    max="0.25" 
                    step="0.005" 
                    value={localSettings.blinkEarThreshold || 0.165} 
                    onChange={(e) => handleChange('blinkEarThreshold', parseFloat(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--primary-color)' }} 
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>0.25 (Loose)</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Hold Duration for Click</label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Intentional click delay (prevents accidental natural blinks)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="number" 
                    step="0.05"
                    min="0.2"
                    max="1.5"
                    value={localSettings.blinkHoldSeconds || 0.55} 
                    onChange={(e) => handleChange('blinkHoldSeconds', parseFloat(e.target.value))}
                    style={{ padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '80px', fontWeight: 700 }} 
                  />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>sec</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Click Cooldown</label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Pause after click to prevent rapid double-clicks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="number" 
                    step="0.1"
                    min="0.3"
                    max="3.0"
                    value={localSettings.clickCooldown || 1.0} 
                    onChange={(e) => handleChange('clickCooldown', parseFloat(e.target.value))}
                    style={{ padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', width: '80px', fontWeight: 700 }} 
                  />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>sec</span>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={localSettings.leftClickOnBlink ?? true} 
                  onChange={(e) => handleChange('leftClickOnBlink', e.target.checked)}
                  style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} 
                />
                <span style={{ fontWeight: 600 }}>Enable Left Click on Intentional Blink</span>
              </label>
            </div>
          </div>

          {/* Mouth Settings */}
          <div className="card">
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.125rem' }}>Mouth & Scroll Mode</h3>
            
            <div className="flex-col gap-5">
              <div>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Mouth Opening Threshold (MAR)</label>
                  <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                    {localSettings.mouthOpenThreshold}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>0.35</span>
                  <input 
                    type="range" 
                    min="0.35" 
                    max="0.75" 
                    step="0.02" 
                    value={localSettings.mouthOpenThreshold || 0.55} 
                    onChange={(e) => handleChange('mouthOpenThreshold', parseFloat(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--primary-color)' }} 
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>0.75</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Scroll Tilt Sensitivity</label>
                  <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                    {localSettings.scrollSensitivity || 15}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Gentle</span>
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    value={localSettings.scrollSensitivity || 15} 
                    onChange={(e) => handleChange('scrollSensitivity', parseInt(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--primary-color)' }} 
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Fast</span>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={localSettings.scrollModeEnabled ?? true} 
                  onChange={(e) => handleChange('scrollModeEnabled', e.target.checked)}
                  style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--success-color)' }} 
                />
                <span style={{ fontWeight: 600 }}>Enable Mouth-Open Mode Toggle (MOVE ↔ SCROLL)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Stillness Lock Parameters */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Stillness Lock Hysteresis Settings</h3>
            <div className="system-status">
              <span className={`status-dot ${localSettings.stillnessLockEnabled ? 'status-active' : 'status-inactive'}`}></span>
              <span style={{ fontWeight: 600 }}>{localSettings.stillnessLockEnabled ? 'Active' : 'Disabled'}</span>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            Locks the cursor position in place when your head is stationary, preventing micro-jitters during reading or clicking. 
            Once locked, a deliberate head movement breaks the lock and resumes normal tracking.
          </p>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                Enter Radius (px)
              </label>
              <input 
                type="number" 
                min="1"
                max="15"
                value={localSettings.stillnessEnterRadius || 4.0}
                onChange={(e) => handleChange('stillnessEnterRadius', parseFloat(e.target.value))}
                style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontWeight: 600 }}
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.25rem', display: 'block' }}>
                Max movement to count as steady (default 4px)
              </span>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                Exit Radius (px)
              </label>
              <input 
                type="number" 
                min="3"
                max="30"
                value={localSettings.stillnessExitRadius || 8.0}
                onChange={(e) => handleChange('stillnessExitRadius', parseFloat(e.target.value))}
                style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontWeight: 600 }}
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.25rem', display: 'block' }}>
                Movement required to break lock (default 8px)
              </span>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                Hold Time (sec)
              </label>
              <input 
                type="number" 
                step="0.05"
                min="0.1"
                max="1.0"
                value={localSettings.stillnessHoldTime || 0.2}
                onChange={(e) => handleChange('stillnessHoldTime', parseFloat(e.target.value))}
                style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontWeight: 600 }}
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.25rem', display: 'block' }}>
                Steadiness time before locking (default 0.2s)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
