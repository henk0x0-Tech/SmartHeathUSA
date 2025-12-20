import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-10 text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong.</h1>
                    <p className="text-slate-700 mb-4">The application crashed. Please check the console for details.</p>
                    <details className="text-left bg-slate-100 p-4 rounded text-sm font-mono overflow-auto max-w-2xl mx-auto">
                        <summary>Error Details</summary>
                        <div className="mt-2">
                            <p className="font-bold">{this.state.error && this.state.error.toString()}</p>
                            <br />
                            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                        </div>
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
