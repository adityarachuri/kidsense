import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SourcesPage } from './SourcesPage';

describe('SourcesPage', () => {
  it('renders the sources and methodology heading', () => {
    render(
      <MemoryRouter>
        <SourcesPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /sources & methodology/i })).toBeInTheDocument();
  });

  it('lists representative authoritative organizations', () => {
    render(
      <MemoryRouter>
        <SourcesPage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/American Academy of Pediatrics/i)).toBeInTheDocument();
    expect(screen.getByText(/World Health Organization/i)).toBeInTheDocument();
  });

  it('links back to the disclaimer, terms, and privacy pages', () => {
    render(
      <MemoryRouter>
        <SourcesPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /disclaimer/i })).toHaveAttribute(
      'href',
      '/disclaimer',
    );
    expect(screen.getByRole('link', { name: /terms of use/i })).toHaveAttribute(
      'href',
      '/terms-of-use',
    );
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
      'href',
      '/privacy',
    );
  });
});
