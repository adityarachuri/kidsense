import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useLocale } from '../hooks/useLocale';
import { LocaleProvider } from './LocaleProvider';

function Probe() {
  const { locale, setLocale, t } = useLocale();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="text">{t((d) => d.common.home)}</span>
      <button onClick={() => setLocale('hi')}>Switch to Hindi</button>
    </div>
  );
}

describe('LocaleProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-locale');
    document.documentElement.lang = 'en';
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-locale');
    document.documentElement.lang = 'en';
  });

  it('defaults to English when nothing is stored', () => {
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(screen.getByTestId('locale')).toHaveTextContent('en');
    expect(screen.getByTestId('text')).toHaveTextContent('Home');
  });

  it('reads a previously stored locale on mount', () => {
    localStorage.setItem('kidsense-locale', 'te');
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(screen.getByTestId('locale')).toHaveTextContent('te');
  });

  it('switching locale updates the dictionary, the DOM, and localStorage together', async () => {
    const user = userEvent.setup();
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );

    await user.click(screen.getByRole('button', { name: /switch to hindi/i }));

    expect(screen.getByTestId('locale')).toHaveTextContent('hi');
    expect(screen.getByTestId('text')).toHaveTextContent('होम');
    expect(document.documentElement.lang).toBe('hi');
    expect(document.documentElement.getAttribute('data-locale')).toBe('hi');
    expect(localStorage.getItem('kidsense-locale')).toBe('hi');
  });

  it('ignores an invalid value left in localStorage and falls back to the default', () => {
    localStorage.setItem('kidsense-locale', 'not-a-real-locale');
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(screen.getByTestId('locale')).toHaveTextContent('en');
  });
});
