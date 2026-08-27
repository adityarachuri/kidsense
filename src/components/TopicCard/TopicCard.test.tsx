import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { morningRoutineTopics } from '../../content/section1-morning-routine';
import { TopicCard } from './TopicCard';

describe('TopicCard', () => {
  const topic = morningRoutineTopics[0]!;

  it('links to the correct nested topic route', () => {
    render(
      <MemoryRouter>
        <TopicCard sectionId="morning-routine" topic={topic} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/section/morning-routine/${topic.id}`,
    );
  });

  it('renders the topic title', () => {
    render(
      <MemoryRouter>
        <TopicCard sectionId="morning-routine" topic={topic} />
      </MemoryRouter>,
    );
    expect(screen.getByText(topic.title)).toBeInTheDocument();
  });

  it('zero-pads single-digit topic numbers', () => {
    render(
      <MemoryRouter>
        <TopicCard sectionId="morning-routine" topic={topic} />
      </MemoryRouter>,
    );
    expect(screen.getByText(String(topic.topicNumber).padStart(2, '0'))).toBeInTheDocument();
  });
});
