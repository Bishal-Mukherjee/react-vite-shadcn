import React, { ReactNode } from "react";
import ErrorSvg from "@/assets/svg/error.svg";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error Boundary Caught an Error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
          <img src={ErrorSvg} alt="Error" className="w-72 h-72" />
          <h1 className="text-lg text-red-500">Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
