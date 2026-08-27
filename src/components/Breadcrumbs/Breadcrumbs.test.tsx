import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders a link for every crumb except the last', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Morning Routine', to: '/section/morning-routine' },
            { label: 'Wake Up' },
          ]}
        />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Morning Routine' })).toHaveAttribute(
      'href',
      '/section/morning-routine',
    );
    expect(screen.queryByRole('link', { name: 'Wake Up' })).not.toBeInTheDocument();
  });

  it('marks the final crumb as the current page', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wake Up' }]} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Wake Up')).toHaveAttribute('aria-current', 'page');
  });

  it('renders separators between crumbs but not before the first', () => {
    const { container } = render(
      <MemoryRouter>
        <Breadcrumbs
          items={[{ label: 'Home', to: '/' }, { label: 'Section', to: '/s' }, { label: 'Topic' }]}
        />
      </MemoryRouter>,
    );
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators).toHaveLength(2);
  });
});
