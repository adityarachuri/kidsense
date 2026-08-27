import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the home page at the root route', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /why kids do what they do/i })).toBeInTheDocument();
  });

  it('navigates from home to a section and then to a topic', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText('Morning Routine'));
    expect(
      await screen.findByRole('heading', { name: /section 1: morning routine/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByText(/why don't kids want to wake up/i));
    expect(await screen.findByText('Right After the Alarm Rings?')).toBeInTheDocument();
  });

  it('shows the not-found page for an unknown route', async () => {
    window.history.pushState({}, '', '/this-route-does-not-exist');
    render(<App />);
    expect(await screen.findByRole('heading', { name: /page not found/i })).toBeInTheDocument();
  });

  it('navigates from the footer to the disclaimer page', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('link', { name: 'Disclaimer' }));
    expect(
      await screen.findByRole('heading', { name: /medical & psychological disclaimer/i }),
    ).toBeInTheDocument();
  });
});
