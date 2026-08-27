import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { sections } from '../../content/sections';
import type { Section } from '../../types/content';
import { SectionCard } from './SectionCard';

const emptySection: Section = {
  id: 'empty-section',
  title: 'Section X: Empty',
  shortTitle: 'Empty',
  description: 'Nothing here yet.',
  icon: '🧪',
  topics: [],
  plannedTopicCount: 5,
};

describe('SectionCard', () => {
  it('renders a working link for a section with topics', () => {
    const section = sections.find((s) => s.topics.length > 0)!;
    render(
      <MemoryRouter>
        <SectionCard section={section} />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/section/${section.id}`);
  });

  it('renders the section title and description', () => {
    const section = sections.find((s) => s.topics.length > 0)!;
    render(
      <MemoryRouter>
        <SectionCard section={section} />
      </MemoryRouter>,
    );
    expect(screen.getByText(section.shortTitle)).toBeInTheDocument();
    expect(screen.getByText(section.description)).toBeInTheDocument();
  });

  it('renders a non-interactive, disabled card for a section with no topics yet', () => {
    render(
      <MemoryRouter>
        <SectionCard section={emptySection} />
      </MemoryRouter>,
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });
});
