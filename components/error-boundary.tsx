"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center p-8 border border-red-950/50 bg-black/50 text-center">
          <AlertTriangle className="w-12 h-12 text-red-900 mb-4" />
          <p className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
            Something went wrong
          </p>
          <p className="text-xs text-zinc-600 mt-2">
            This section failed to load
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
