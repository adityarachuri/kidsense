import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { morningRoutineTopics } from '../../content/section1-morning-routine';
import { TopicPage } from './TopicPage';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/section/:sectionId/:topicId" element={<TopicPage />} />
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
    renderAt(`/section/morning-routine/${topic.id}`);
    expect(screen.queryByText('Perspectives')).not.toBeInTheDocument();
    expect(screen.queryByText('Around the World')).not.toBeInTheDocument();
    expect(screen.queryByText(/informed by publicly available guidance/i)).not.toBeInTheDocument();
  });
});
