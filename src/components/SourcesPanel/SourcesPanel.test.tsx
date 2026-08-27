import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SourcesPanel } from './SourcesPanel';

describe('SourcesPanel', () => {
  it('renders nothing when sources is undefined', () => {
    const { container } = render(
      <MemoryRouter>
        <SourcesPanel sources={undefined} />
      </MemoryRouter>,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when sources is an empty array', () => {
    const { container } = render(
      <MemoryRouter>
        <SourcesPanel sources={[]} />
      </MemoryRouter>,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('lists the provided source organizations and links to the sources page', () => {
    render(
      <MemoryRouter>
        <SourcesPanel sources={['American Academy of Pediatrics', 'CDC']} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/American Academy of Pediatrics, CDC/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sources & methodology/i })).toHaveAttribute(
      'href',
      '/sources',
    );
  });
});
