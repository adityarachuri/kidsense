import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { sections } from '../../content/sections';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the page heading', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /why kids do what they do/i })).toBeInTheDocument();
  });

  it('renders a card for every section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    for (const section of sections) {
      expect(screen.getByText(section.shortTitle)).toBeInTheDocument();
    }
  });

  it('renders the browse-by-age entry point', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /browse by age/i })).toBeInTheDocument();
  });
});
