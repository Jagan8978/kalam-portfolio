import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

/**
 * Small Error Boundary to catch runtime errors and show a visible message
 * so you don't get a silent blank screen.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console (and replace with reporting service later)
    console.error('Uncaught error in React tree:', error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#111827',
          color: '#ffdede',
          minHeight: '100vh',
          padding: 30,
          fontFamily: 'Inter, Arial, sans-serif'
        }}>
          <h1 style={{ color: '#ff6b6b' }}>Something went wrong</h1>
          <p>The app crashed during render. See details below.</p>
          <pre style={{
            whiteSpace: 'pre-wrap',
            background: '#0b1220',
            padding: 12,
            borderRadius: 6,
            color: '#9ad'
          }}>
            {String(this.state.error && this.state.error.toString())}
            {this.state.info ? '\n\n' + (this.state.info.componentStack || '') : ''}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

const container = document.getElementById('root');

if (!container) {
  console.error("No root element found. Make sure public/index.html has <div id='root'></div>");
} else {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>

      {/* Dev-only visible helper if React mounts but App renders nothing.
          This small overlay helps debugging in dev without changing App. */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          right: 12,
          bottom: 12,
          zIndex: 9999,
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          padding: '6px 10px',
          borderRadius: 8,
          fontSize: 12,
          fontFamily: 'Inter, Arial, sans-serif'
        }}>
          React mounted — App rendering...
        </div>
      )}
    </React.StrictMode>
  );
}
