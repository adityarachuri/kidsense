import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { getTotalAuthoredTopicCount, getTotalPlannedTopicCount } from '../../content/sections';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the authored and planned topic counts', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const authored = getTotalAuthoredTopicCount();
    const planned = getTotalPlannedTopicCount();
    expect(
      screen.getByText(new RegExp(`${authored} of ${planned} topics published`)),
    ).toBeInTheDocument();
  });

  it('links to the disclaimer, terms, privacy, and sources pages', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: 'Disclaimer' })).toHaveAttribute('href', '/disclaimer');
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toHaveAttribute(
      'href',
      '/terms-of-use',
    );
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /sources & methodology/i })).toHaveAttribute(
      'href',
      '/sources',
    );
  });
});
