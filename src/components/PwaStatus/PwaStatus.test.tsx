import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { act } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import {
  __getLastRegisterSWOptions,
  __resetVirtualPwaRegisterMock,
} from '../../test/mocks/virtualPwaRegister';
import { PwaStatus } from './PwaStatus';

afterEach(() => {
  __resetVirtualPwaRegisterMock();
  Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
});

describe('PwaStatus', () => {
  it('renders nothing by default', () => {
    const { container } = render(<PwaStatus />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows the update banner with a working reload button', async () => {
    const user = userEvent.setup();
    render(<PwaStatus />);
    act(() => {
      __getLastRegisterSWOptions()?.onNeedRefresh?.();
    });
    expect(screen.getByRole('status')).toHaveTextContent('A new version of Kidsense is available.');
    const reloadButton = screen.getByRole('button', { name: 'Reload' });
    await user.click(reloadButton);
  });

  it('shows the offline-ready message', () => {
    render(<PwaStatus />);
    act(() => {
      __getLastRegisterSWOptions()?.onOfflineReady?.();
    });
    expect(screen.getByRole('status')).toHaveTextContent('Kidsense is ready to work offline.');
  });

  it('shows the offline indicator when the browser goes offline', () => {
    render(<PwaStatus />);
    act(() => {
      Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
      window.dispatchEvent(new Event('offline'));
    });
    expect(screen.getByRole('status')).toHaveTextContent("You're offline");
  });

  it('hides the offline indicator again once back online', () => {
    render(<PwaStatus />);
    act(() => {
      Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
      window.dispatchEvent(new Event('offline'));
    });
    act(() => {
      Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
      window.dispatchEvent(new Event('online'));
    });
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('dismisses the update banner', async () => {
    const user = userEvent.setup();
    render(<PwaStatus />);
    act(() => {
      __getLastRegisterSWOptions()?.onNeedRefresh?.();
    });
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('has no accessibility violations when showing the update banner', async () => {
    const { container } = render(<PwaStatus />);
    act(() => {
      __getLastRegisterSWOptions()?.onNeedRefresh?.();
    });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations when showing the offline indicator', async () => {
    const { container } = render(<PwaStatus />);
    act(() => {
      Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
      window.dispatchEvent(new Event('offline'));
    });
    expect(await axe(container)).toHaveNoViolations();
  });
});
