import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Register service worker for offline / installable app feel
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// Runtime error boundary — if the app crashes, show a recovery UI instead of blank
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('[Lewis Team app]', error, info); }
  reset = () => {
    try {
      // Clear ONLY localStorage (preserve login cookies etc.)
      for (const key of Object.keys(localStorage || {})) {
        if (key.startsWith('lt_')) localStorage.removeItem(key);
      }
    } catch {}
    window.location.reload();
  };
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{
        minHeight: '100vh', padding: 24,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#0F2A3F', color: '#F5EFE6',
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}>
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, marginBottom: 8 }}>
            Something broke.
          </h1>
          <p style={{ opacity: 0.8, marginBottom: 16, fontSize: 14 }}>
            The app hit an error. Tap reload to try again. If it keeps happening, tap "Reset local data" —
            that clears your device's cache but won't touch your cloud-synced leads.
          </p>
          <pre style={{
            textAlign: 'left', fontSize: 11, opacity: 0.6,
            background: 'rgba(255,255,255,0.05)', padding: 12, borderRadius: 8,
            overflow: 'auto', maxHeight: 160, marginBottom: 20,
          }}>{String(this.state.error?.message || this.state.error)}</pre>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px', borderRadius: 12, border: 'none',
                background: '#C8985A', color: '#0F2A3F', fontWeight: 700,
                fontSize: 14, cursor: 'pointer',
              }}>
              Reload
            </button>
            <button onClick={this.reset}
              style={{
                padding: '12px 24px', borderRadius: 12,
                background: 'rgba(255,255,255,0.08)', color: '#F5EFE6',
                border: '1px solid rgba(255,255,255,0.2)', fontWeight: 600,
                fontSize: 14, cursor: 'pointer',
              }}>
              Reset local data
            </button>
            <a href="tel:8632881772"
              style={{
                padding: '12px 24px', borderRadius: 12, textDecoration: 'none',
                background: 'transparent', color: '#C8985A',
                border: '1px solid #C8985A', fontWeight: 600, fontSize: 14,
              }}>
              Call The Lewis Team
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
