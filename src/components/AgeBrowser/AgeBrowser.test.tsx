import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AgeBrowser } from './AgeBrowser';

function renderBrowser() {
  return render(
    <MemoryRouter>
      <AgeBrowser />
    </MemoryRouter>,
  );
}

describe('AgeBrowser', () => {
  it('renders a button for each of the six milestone ages', () => {
    renderBrowser();
    for (const age of [5, 8, 10, 12, 15, 18]) {
      expect(screen.getByRole('button', { name: `Age ${age}` })).toBeInTheDocument();
    }
  });

  it('shows no results until an age is selected', () => {
    renderBrowser();
    expect(screen.queryAllByRole('link').length).toBe(0);
  });

  it('shows matching topics when a milestone age with authored content is selected', async () => {
    const user = userEvent.setup();
    renderBrowser();
    await user.click(screen.getByRole('button', { name: 'Age 8' }));
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: 'Age 8' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('shows an empty-state message for a milestone age with no authored content yet', async () => {
    const user = userEvent.setup();
    renderBrowser();
    await user.click(screen.getByRole('button', { name: 'Age 18' }));
    expect(screen.getByText(/still being authored/i)).toBeInTheDocument();
  });

  it('deselects and hides results when the active age button is clicked again', async () => {
    const user = userEvent.setup();
    renderBrowser();
    await user.click(screen.getByRole('button', { name: 'Age 8' }));
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
    await user.click(screen.getByRole('button', { name: 'Age 8' }));
    expect(screen.queryAllByRole('link').length).toBe(0);
    expect(screen.getByRole('button', { name: 'Age 8' })).toHaveAttribute('aria-pressed', 'false');
  });
});
