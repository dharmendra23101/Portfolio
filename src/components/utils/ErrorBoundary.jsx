import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'rgba(10, 11, 16, 0.9)', 
          color: '#fff',
          borderRadius: '8px',
          margin: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          <h2>Something went wrong.</h2>
          <p>The application encountered an error. Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#6e57ff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
              <summary style={{ cursor: 'pointer', color: '#ccc' }}>Show Error Details</summary>
              <p style={{ color: '#ff4757' }}>{this.state.error && this.state.error.toString()}</p>
              <p style={{ color: '#ccc' }}>Component Stack:</p>
              <pre style={{ color: '#ccc', fontSize: '0.9em' }}>
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;