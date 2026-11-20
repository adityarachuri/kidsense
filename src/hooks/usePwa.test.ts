import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  __getLastRegisterSWOptions,
  __resetVirtualPwaRegisterMock,
  registerSW,
} from '../test/mocks/virtualPwaRegister';
import { usePwa } from './usePwa';

afterEach(() => {
  __resetVirtualPwaRegisterMock();
});

describe('usePwa', () => {
  it('registers the service worker once on mount', () => {
    renderHook(() => usePwa());
    expect(registerSW).toHaveBeenCalledTimes(1);
  });

  it('starts with no refresh/offline-ready state', () => {
    const { result } = renderHook(() => usePwa());
    expect(result.current.needRefresh).toBe(false);
    expect(result.current.offlineReady).toBe(false);
  });

  it('flips needRefresh when onNeedRefresh fires', () => {
    const { result } = renderHook(() => usePwa());
    act(() => {
      __getLastRegisterSWOptions()?.onNeedRefresh?.();
    });
    expect(result.current.needRefresh).toBe(true);
  });

  it('flips offlineReady when onOfflineReady fires', () => {
    const { result } = renderHook(() => usePwa());
    act(() => {
      __getLastRegisterSWOptions()?.onOfflineReady?.();
    });
    expect(result.current.offlineReady).toBe(true);
  });

  it('clears both flags on dismiss', () => {
    const { result } = renderHook(() => usePwa());
    act(() => {
      __getLastRegisterSWOptions()?.onNeedRefresh?.();
      __getLastRegisterSWOptions()?.onOfflineReady?.();
    });
    act(() => {
      result.current.dismiss();
    });
    expect(result.current.needRefresh).toBe(false);
    expect(result.current.offlineReady).toBe(false);
  });

  it('calls the registered update function with reloadPage=true', async () => {
    const { result } = renderHook(() => usePwa());
    const updateFn = registerSW.mock.results[0]?.value;
    await act(async () => {
      await result.current.updateServiceWorker();
    });
    expect(updateFn).toHaveBeenCalledWith(true);
  });

  it('logs registration errors via onRegisterError', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    renderHook(() => usePwa());
    const registrationError = new Error('registration failed');
    act(() => {
      __getLastRegisterSWOptions()?.onRegisterError?.(registrationError);
    });
    expect(errorSpy).toHaveBeenCalledWith('Service worker registration failed', registrationError);
    errorSpy.mockRestore();
  });
});
