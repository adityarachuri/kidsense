import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { TermsOfUsePage } from './TermsOfUsePage';

describe('TermsOfUsePage', () => {
  it('renders the terms of use heading', () => {
    render(
      <MemoryRouter>
        <TermsOfUsePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /terms of use/i })).toBeInTheDocument();
  });

  it('links to the disclaimer and sources pages', () => {
    render(
      <MemoryRouter>
        <TermsOfUsePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /disclaimer/i })).toHaveAttribute(
      'href',
      '/disclaimer',
    );
    expect(screen.getByRole('link', { name: /sources & methodology/i })).toHaveAttribute(
      'href',
      '/sources',
    );
  });

  it('discloses that the terms have not been reviewed by a lawyer', () => {
    render(
      <MemoryRouter>
        <TermsOfUsePage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/not been drafted or reviewed by a lawyer/i)).toBeInTheDocument();
  });
});
