import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';

function Bomb(): never {
  throw new Error('Boom');
}

describe('ErrorBoundary', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
  let assignSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // React logs its own error to console.error too; silence noisy test output.
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    assignSpy = vi.fn();
    // jsdom does not implement navigation; stub it so the recovery button is testable.
    Object.defineProperty(window, 'location', {
      value: { assign: assignSpy },
      writable: true,
    });
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders children normally when there is no error', () => {
    render(
      <ErrorBoundary>
        <p>All good</p>
      </ErrorBoundary>,
    );
    expect(screen.getByText('All good')).toBeInTheDocument();
  });

  it('renders a fallback UI when a child throws', () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('navigates home when the recovery button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
    await user.click(screen.getByRole('button', { name: /back to home/i }));
    expect(assignSpy).toHaveBeenCalledWith('/');
  });
});
