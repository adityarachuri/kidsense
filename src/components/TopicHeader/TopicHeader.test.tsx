import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { morningRoutineTopics } from '../../content/section1-morning-routine';
import { TopicHeader } from './TopicHeader';

describe('TopicHeader', () => {
  const topic = morningRoutineTopics[0]!;

  it('renders all three heading lines inside a single h1', () => {
    render(<TopicHeader topic={topic} sectionShortTitle="Morning Routine" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(topic.heading.lead);
    expect(heading).toHaveTextContent(topic.heading.emphasis);
    expect(heading).toHaveTextContent(topic.heading.trailing);
  });

  it('renders the quote inside quotation marks', () => {
    render(<TopicHeader topic={topic} sectionShortTitle="Morning Routine" />);
    expect(screen.getByText(`\u201C${topic.quote}\u201D`)).toBeInTheDocument();
  });

  it('renders one badge per age range', () => {
    render(<TopicHeader topic={topic} sectionShortTitle="Morning Routine" />);
    for (const range of topic.ageRanges) {
      expect(screen.getByText(range)).toBeInTheDocument();
    }
  });

  it('renders the illustration for the topic', () => {
    const { container } = render(<TopicHeader topic={topic} sectionShortTitle="Morning Routine" />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
