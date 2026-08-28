import { Component, type ErrorInfo, type ReactNode } from 'react';
import { LocaleContext, type LocaleContextValue } from '../../i18n/localeContext';
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
  public static override contextType = LocaleContext;
  declare context: LocaleContextValue;

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
      const { t } = this.context;
      return (
        <div className={styles.wrapper} role="alert">
          <div className={styles.emoji} aria-hidden="true">
            😕
          </div>
          <h1 className={styles.title}>{t((d) => d.errorBoundary.title)}</h1>
          <p className={styles.message}>{t((d) => d.errorBoundary.message)}</p>
          <button type="button" className={styles.button} onClick={this.handleReload}>
            {t((d) => d.common.backToHome)}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
