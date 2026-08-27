import { Component, type ErrorInfo, type ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  readonly children: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
}

/**
 * Top-level error boundary. Class components remain the only way to
 * implement `componentDidCatch` / `getDerivedStateFromError` in React.
 * Logs via console.error only (no external error-reporting endpoint is
 * wired up, so nothing here transmits data anywhere).
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Unhandled error in the handbook UI:', error, info.componentStack);
  }

  private handleReload = (): void => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper} role="alert">
          <div className={styles.emoji} aria-hidden="true">
            😕
          </div>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.message}>
            This page hit an unexpected error. Your data is safe — try heading back home.
          </p>
          <button type="button" className={styles.button} onClick={this.handleReload}>
            Back to home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
