import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import type * as SectionsModule from '../../content/sections';
import type { Section } from '../../types/content';
import { SectionPage } from './SectionPage';

const emptySection: Section = {
  id: 'empty-section',
  title: 'Section X: Empty',
  shortTitle: 'Empty',
  description: 'Nothing here yet.',
  icon: '🧪',
  topics: [],
  plannedTopicCount: 5,
};

vi.mock('../../content/sections', async () => {
  const actual = await vi.importActual<typeof SectionsModule>('../../content/sections');
  return {
    ...actual,
    getSectionById: (sectionId: string) =>
      sectionId === emptySection.id ? emptySection : actual.getSectionById(sectionId),
  };
});

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/section/:sectionId" element={<SectionPage />} />
        <Route path="/not-found" element={<div>Not found page</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('SectionPage', () => {
  it('renders the section title and a card per topic for an authored section', () => {
    renderAt('/section/morning-routine');
    expect(
      screen.getByRole('heading', { name: /section 1: morning routine/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBeGreaterThan(1); // breadcrumb + topic links
  });

  it('shows an empty-state message for a planned but unauthored section', () => {
    renderAt(`/section/${emptySection.id}`);
    expect(screen.getByText(/not yet published/i)).toBeInTheDocument();
  });

  it('redirects to the not-found route for an unknown section id', () => {
    renderAt('/section/does-not-exist');
    expect(screen.getByText('Not found page')).toBeInTheDocument();
  });

  it('redirects to not-found when rendered with no sectionId param at all', () => {
    render(
      <MemoryRouter initialEntries={['/no-param']}>
        <Routes>
          <Route path="/no-param" element={<SectionPage />} />
          <Route path="/not-found" element={<div>Not found page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('Not found page')).toBeInTheDocument();
  });

  it('renders breadcrumbs linking back home', () => {
    renderAt('/section/morning-routine');
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });
});
