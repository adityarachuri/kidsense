import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { morningRoutineTopics } from '../../content/section1-morning-routine';
import type * as SectionsModule from '../../content/sections';
import type { Section, Topic } from '../../types/content';
import { TopicPage } from './TopicPage';

// perspectives/culturalLens/sources are explicitly cleared so this fixture stays "unauthored"
// regardless of what real content gets added to morningRoutineTopics later.
const multiVariantBase = morningRoutineTopics[0]!;
const generalVariant: Topic = {
  ...multiVariantBase,
  explanation: 'General explanation for all readers.',
  perspectives: undefined,
  culturalLens: undefined,
  sources: undefined,
};
const teenVariant: Topic = {
  ...multiVariantBase,
  explanation: 'Teen-specific explanation written for teens.',
  ageBandIds: ['teen'],
  perspectives: undefined,
  culturalLens: undefined,
  sources: undefined,
};
const multiVariantSection: Section = {
  id: 'multi-variant-section',
  title: 'Section X: Multi',
  shortTitle: 'Multi',
  description: 'Has a topic family with more than one variant.',
  icon: '🧪',
  topics: [generalVariant, teenVariant],
  plannedTopicCount: 1,
};

vi.mock('../../content/sections', async () => {
  const actual = await vi.importActual<typeof SectionsModule>('../../content/sections');
  return {
    ...actual,
    getSectionById: (sectionId: string) =>
      sectionId === multiVariantSection.id ? multiVariantSection : actual.getSectionById(sectionId),
  };
});

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/section/:sectionId/:topicId" element={<TopicPage />} />
        <Route path="/section/:sectionId/:topicId/:ageBandId" element={<TopicPage />} />
        <Route path="/not-found" element={<div>Not found page</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('TopicPage', () => {
  const topic = morningRoutineTopics[0]!;

  afterEach(() => {
    document.title = '';
  });

  it('has no accessibility violations', async () => {
    const { container } = renderAt(`/section/morning-routine/${topic.id}`);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the full topic content for a valid section/topic pair', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.getByText(topic.heading.emphasis)).toBeInTheDocument();
    expect(screen.getByText(topic.reassurance)).toBeInTheDocument();
    expect(screen.getByText(topic.insight)).toBeInTheDocument();
  });

  it('renders exactly one h1, matching every other page in the app', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders all 8 reason cards', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.getAllByRole('article')).toHaveLength(8);
  });

  it('sets the document title to the topic title', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(document.title).toContain(topic.title);
  });

  it('redirects to not-found for an unknown topic id within a valid section', () => {
    renderAt('/section/morning-routine/does-not-exist');
    expect(screen.getByText('Not found page')).toBeInTheDocument();
  });

  it('redirects to not-found for an unknown section id', () => {
    renderAt('/section/does-not-exist/some-topic');
    expect(screen.getByText('Not found page')).toBeInTheDocument();
  });

  it('redirects to not-found when rendered with no route params at all', () => {
    render(
      <MemoryRouter initialEntries={['/no-params']}>
        <Routes>
          <Route path="/no-params" element={<TopicPage />} />
          <Route path="/not-found" element={<div>Not found page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('Not found page')).toBeInTheDocument();
  });

  it('renders a "next up" link to another topic in the same section', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.getByText('Next up')).toBeInTheDocument();
  });

  it('renders breadcrumbs including the section and topic', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.getByRole('link', { name: 'Morning Routine' })).toBeInTheDocument();
  });

  it('renders a print button', () => {
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.getByRole('button', { name: /print this page/i })).toBeInTheDocument();
  });

  it('omits the perspectives, cultural lens, and sources panels for a topic with none authored', () => {
    renderAt(`/section/${multiVariantSection.id}/${generalVariant.id}`);
    expect(screen.queryByText('Perspectives')).not.toBeInTheDocument();
    expect(screen.queryByText('Around the World')).not.toBeInTheDocument();
    expect(screen.queryByText(/informed by publicly available guidance/i)).not.toBeInTheDocument();
  });
});

describe('TopicPage age-band variants', () => {
  it('shows the general variant and an age switcher when more than one variant exists', () => {
    renderAt(`/section/${multiVariantSection.id}/${multiVariantBase.id}`);
    expect(screen.getByText(generalVariant.explanation)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'General' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Teen' })).toBeInTheDocument();
  });

  it('shows the band-specific variant when its ageBandId is in the URL', () => {
    renderAt(`/section/${multiVariantSection.id}/${multiVariantBase.id}/teen`);
    expect(screen.getByText(teenVariant.explanation)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Teen' })).toHaveAttribute('aria-current', 'page');
  });

  it('falls back to the general variant for a band no variant claims, instead of 404ing', () => {
    renderAt(`/section/${multiVariantSection.id}/${multiVariantBase.id}/older-teen`);
    expect(screen.getByText(generalVariant.explanation)).toBeInTheDocument();
    expect(screen.queryByText('Not found page')).not.toBeInTheDocument();
  });

  it('falls back to the general variant for a garbage ageBandId segment', () => {
    renderAt(`/section/${multiVariantSection.id}/${multiVariantBase.id}/not-a-real-band`);
    expect(screen.getByText(generalVariant.explanation)).toBeInTheDocument();
  });
});
