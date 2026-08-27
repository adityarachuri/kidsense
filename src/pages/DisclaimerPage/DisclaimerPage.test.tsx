import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { DisclaimerPage } from './DisclaimerPage';

describe('DisclaimerPage', () => {
  it('renders the disclaimer heading', () => {
    render(
      <MemoryRouter>
        <DisclaimerPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /medical & psychological disclaimer/i }),
    ).toBeInTheDocument();
  });

  it('links to the sources and terms of use pages', () => {
    render(
      <MemoryRouter>
        <DisclaimerPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /sources & methodology/i })).toHaveAttribute(
      'href',
      '/sources',
    );
    expect(screen.getByRole('link', { name: /terms of use/i })).toHaveAttribute(
      'href',
      '/terms-of-use',
    );
  });

  it('directs a crisis to local emergency services rather than listing specific numbers', () => {
    render(
      <MemoryRouter>
        <DisclaimerPage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/local emergency services/i)).toBeInTheDocument();
  });
});
