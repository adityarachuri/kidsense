import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PrintButton } from './PrintButton';

describe('PrintButton', () => {
  const originalPrint = window.print;

  beforeEach(() => {
    window.print = vi.fn();
  });

  afterEach(() => {
    window.print = originalPrint;
  });

  it('renders a button labeled to print', () => {
    render(<PrintButton />);
    expect(screen.getByRole('button', { name: /print this page/i })).toBeInTheDocument();
  });

  it('calls window.print when clicked', async () => {
    const user = userEvent.setup();
    render(<PrintButton />);
    await user.click(screen.getByRole('button', { name: /print this page/i }));
    expect(window.print).toHaveBeenCalledTimes(1);
  });
});
