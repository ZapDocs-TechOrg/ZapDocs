import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application rendering failed", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-canvas px-6">
          <section className="max-w-md text-center">
            <AlertTriangle className="mx-auto mb-5 size-8 text-amber" aria-hidden="true" />
            <h1 className="font-display text-3xl text-ink">This page hit a snag</h1>
            <p className="mt-3 text-sm leading-6 text-muted">The workspace could not render this view.</p>
            <button
              className="mt-6 rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              onClick={() => window.location.reload()}
              type="button"
            >
              Reload workspace
            </button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
